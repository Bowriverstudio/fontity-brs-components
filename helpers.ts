
/**
 * Converts a tag from gutenberg's editor to a custom component.
 *
 *
 * @param tag - Node tag.
 * @param  component - The component the tag is converted to.
 * 
 * example usage
 * 
 * ```js 
 * 
 * import {customProcessor} from "frontity-brs-components"
 * 
 * const customProcessor = makeProcessor("custom-tag", CustomComponent);
 * const processors = [customProcessor];
 * export default processors;
 * ```
 * 
 * Then in the index.ts file
 * ```js
 * import processors from "./processors/processors";
 * 
 * libraries: {
 *   html2react: {
 *      processors: [...processors],
 *      },
 * },
 * ```
 * 
 */
export function makeProcessor(tag, component) {
    return {
        name: tag,
        test: ({ node }) => node.component === tag,
        processor: () => {
            return {
                component: component,
            }
        },
        priority: 20,
    };
}
