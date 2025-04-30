// functions/api/rsvp.ts

import { createSupabase } from '@/lib/supabaseClient';
// import { sendConfirmationEmail } from '../../src/lib/sendEmail';

type RSVPData = {
    name: string;
    email: string;
    attending: boolean;
    guests: number;
    requests: string;
};

export async function onRequestPost(context: {
    request: Request;
    env: {
        NEXT_PUBLIC_SUPABASE_URL: string;
        NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    };
}) {
    try {
        const { request, env } = context;

        const supabase = createSupabase(env);

        const body = (await request.json()) as RSVPData;
        const { name, email, attending, guests, requests } = body;

        const { error } = await supabase.from('rsvps').insert([
            { name, email, attending, guests, requests },
        ]);

        if (error) {
            console.error(error);
            return new Response(JSON.stringify({ message: 'Lỗi hệ thống!' }), { status: 500 });
        }

        // await sendConfirmationEmail({ name, email, attending, guests });
        const msg = attending
            ? "Cám ơn quý khách đã xác nhận! Hẹn gặp quý khách tại tiệc cưới."
            : "Cám ơn quý khách đã xác nhận!";

        return new Response(JSON.stringify({ message: msg }), {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Or your site URL
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Lỗi hệ thống!' }), {
            status: 500,
            headers: {
                "Access-Control-Allow-Origin": "*", // Or your site URL
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },

        });
    }
};
export async function onRequestGet() {
    return new Response('RSVP API is working', {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Or your site URL
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}

