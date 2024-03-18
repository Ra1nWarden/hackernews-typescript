import React from 'react';
import Link from './Link';
import { gql, useQuery } from '@apollo/client';

export const FEED_QUERY = gql`
    {
        feed {
            id
            links {
                id
                createdAt
                url
                description
                voters {
                    id
                }
            }
        }
    }
`
;

const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);

    return (
        <div>
            {data && (
                <>
                    {data.feed.links.map((link, index) => (
                        <Link key={link.id} link={link} index={index} />
                    ))}
                </>
            )}
        </div>
    );
};

export default LinkList;