import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.guidesID}`);
    const guide = await res.json();

    if (!res.ok) {
        throw redirect(301, '/guides');
    }
    return { guide };

}) satisfies PageServerLoad;
