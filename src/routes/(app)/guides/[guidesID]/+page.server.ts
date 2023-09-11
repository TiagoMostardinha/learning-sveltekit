import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {

    const fetchGuide = async (id: number) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const guide = await res.json();

        if (res.ok)
            return guide;

        return {
            status: res.status,
            error: new Error('Could not fetch guide'),
        }
    };
    return {
        guide: fetchGuide(parseInt(params.guidesID)),
    };
}) satisfies PageServerLoad;