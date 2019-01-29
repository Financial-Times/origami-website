#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const htmlToText = require('html-to-text');
const {JSDOM} = require('jsdom');
const path = require('path');
const request = require('request-promise-native');

sendNewsletter({
	accessKey: process.env.EMAIL_API_KEY,
	newsletter: process.env.EMAIL_SOURCE_HTML,
	send: process.argv.includes('--send')
});

// Generate and send the Origami newsletter
async function sendNewsletter(options) {

	// TODO change to the live URL when we publish
	const htmlUri = `https://origami-test.ft.com/emails/newsletter-${options.newsletter}`;

	// Fetch the HTML content from the live URL
	let htmlContent;
	try {
		htmlContent = await request({
			uri: htmlUri
		});
	} catch (error) {
		console.error('');
		console.error('There was an issue downloading the newsletter HTML at');
		console.error(htmlUri);
		console.error('');
		console.error('Status code:', error.statusCode);
		console.error('');
		console.error('Specify the newsletter HTML with an `EMAIL_SOURCE_HTML`');
		console.error('environment variable and make sure the email is live.');
		console.error('');
		process.exit(1);
	}

	// Generate the plain text content
	const plainTextContent = htmlToText.fromString(htmlContent, {
		ignoreImage: true,
		wordwrap: 65,
		baseElement: [
			'div.email-body',
			'div.footer'
		]
	});

	// Get the subject line
	const subject = new JSDOM(htmlContent).window.document.querySelector('title').textContent;

	// Compose the email
	const body = composeEmail({
		subject: subject,
		htmlContent,
		plainTextContent
	});

	// If we're not sending the email...
	if (!options.send) {

		// Save files for review
		const htmlReviewFile = path.resolve(`${__dirname}/../.email-review/html-email.html`);
		const plainTextReviewFile = path.resolve(`${__dirname}/../.email-review/plain-text-email.txt`);
		await fs.mkdirs('`${__dirname}/../.email-review');
		await fs.writeFile(htmlReviewFile, htmlContent);
		await fs.writeFile(plainTextReviewFile, plainTextContent);

		// Output the review details
		console.log('');
		console.log('Email generated and ready for review');
		console.log('====================================');
		console.log('');
		console.log(`Recipients:    ${body.to.address.join(', ')}`);
		console.log(`Reply-To:      ${body.replyTo}`);
		console.log(`Subject line:  ${body.subject}`);
		console.log('');
		console.log('Review the generated plain text:');
		console.log(`file://${plainTextReviewFile}`);
		console.log('');
		console.log('Review the generated HTML:');
		console.log(`file://${htmlReviewFile}`);
		console.log('');
		return;
	}

	if (!options.accessKey) {
		console.error('');
		console.error('Please specify an access key for the email platform');
		console.error('using an `EMAIL_SOURCE_HTML` environment variable.');
		console.error('');
		process.exit(1);
	}

	// Output the send details
	console.log('');
	console.log('Email getting ready to send...');
	console.log('==============================');
	console.log('');
	console.log(`Recipients:    ${body.to.address.join(', ')}`);
	console.log(`Subject line:  ${body.subject}`);
	console.log('');
	console.log('🙈');
	console.log('');

	// Actually send the email
	const response = await request({
		method: 'POST',
		uri: 'https://ep.ft.com/send-by-address',
		headers: {
			authorization: options.accessKey
		},
		json: true,
		body
	});

	console.log('JSON response from service:');
	console.log(JSON.stringify(response, null, 2));

}

function composeEmail(data) {
	return Object.assign({
		to: {
			address: [
				// TODO this is temporary,
				// we will update to the
				// product and tech list
				// when ready to send
				'origami.support@ft.com'
			]
		},
		from: {
			address: 'origami.support@service.ft.com',
			name: 'Origami'
		},
		replyTo: 'origami.support@ft.com'
	}, data);
}
