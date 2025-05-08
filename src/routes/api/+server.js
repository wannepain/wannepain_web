//ts-ignore
import nodemailer from 'nodemailer';
import { G_MAIL, G_PASSWORD } from '$env/static/private';


export async function POST({ request }) {
	const body = await request.json();
  console.log('API called:', body); // Log the request body for debugging
	const transporter = nodemailer.createTransport({
		service: 'gmail', // or 'hotmail', or use SMTP
		auth: {
			user: G_MAIL,
			pass: G_PASSWORD, // Use an app password, not your real one
		},
	});

	const html = `
		<h2>New Quote Request</h2>
		<p><strong>Name:</strong> ${body.name}</p>
		<p><strong>Email:</strong> ${body.email}</p>
		<p><strong>Phone:</strong> ${body.phone!=""?body.phone:"none"}</p>
		<p><strong>Message:</strong> ${body.message!=""?body.message:"none"}</p>
	`;

	try {
		await transporter.sendMail({
			from: `Quote Bot ${G_MAIL}`,
			to: G_MAIL,
			subject: 'New Quote Request',
			html,
		});
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ success: false }), { status: 500 });
	}
}
