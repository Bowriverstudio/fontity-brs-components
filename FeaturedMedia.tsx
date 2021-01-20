import React from "react";
import { connect, styled, useConnect } from "frontity";
import Source from "@frontity/source/types";

interface MediaSizes {
    source_url: string;
    width: number;
}

/**
 * The Featured component returns an unstyled non linked featured image if availble.
 *
 *
 * @example
 * ```js
 * import {
 *   Box,
 *   chakra,
 * } from "@chakra-ui/core";
 * import FeaturedMedia from "@bowriverstudio/components/FeaturedMedia"
 * const ChakraFeaturedMedia = chakra(FeaturedMedia)
 * 
 * <Link link={item.link}>
 *  <ChakraFeaturedMedia
 *   id={item.featured_media}
 *   size="100%"
 *   rounded="1rem"
 *   shadow="2xl" />
 * </Link>
 * ```
 *
 * @param props - Defined by {@link LinkProps}.
 *
 * @returns An HTML anchor element.
 */
const FeaturedMedia: React.FC<{ id: number, className?: string }> = ({ id, className }) => {
    const { state } = useConnect<Source>();
    const media = state.source.attachment[id];

    if (!media) return null;

    const srcset =
        Object.values(media.media_details.sizes)
            // Get the url and width of each size.
            .map((item: MediaSizes) => [item.source_url, item.width])
            // Recude them to a string with the format required by `srcset`.
            .reduce(
                (final, current, index, array) =>
                    final.concat(
                        `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
                    ),
                ""
            ) || null;

    return (
        <img
            className={className}
            // @ts-ignore until this PR is merged: https://github.com/frontity/frontity/pull/650
            alt={media.title?.rendered}
            src={media.source_url}
            srcSet={srcset}
            loading="lazy"
        />
    );
};

export default connect(FeaturedMedia);

// const Container = styled.div`
//   margin-top: 16px;
//   height: 300px;
// `;

// const StyledImage = styled.img`
//   display: block;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;
