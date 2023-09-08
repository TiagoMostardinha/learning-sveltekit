import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
    const fetchGuides = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const guides = await res.json();
        if (res.ok)
            return guides;

        return {
            status: res.status,
            error: new Error('Could not fetch guides'),
        }
    };

    return {
        guides: fetchGuides(),
    };
}) satisfies PageServerLoad;