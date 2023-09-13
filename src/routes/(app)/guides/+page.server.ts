import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
    const fetchGuides = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const guides = await res.json();

        if (res.ok)
            return guides;

        throw error(res.status, { message: 'Could not fetch guides' });
    };

    return {
        guides: fetchGuides(),
    };
}) satisfies PageServerLoad;