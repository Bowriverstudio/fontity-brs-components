import { Element, Processor } from "@frontity/html2react/types";

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
type Props = {
    /**
     * Tag to be matched
     */
    tag: string;
    component: Element;
    name?: string;
    className?: string;
    priority?: number;
}
export function makeProcessor({ tag, component, name, className, priority }: Props): Processor<Element> {
    return {
        name: (name ? name : tag),
        test: ({ node }) =>
            node.component === tag &&
            // If className it must be included other wises it returns true
            (className ? node.props?.className?.includes(className) : true)
        ,
        processor: () => {
            return {
                component: component,
            }
        },
        priority: (priority ? priority : 20),
    };
}


// const processorsConfig = [
//     {
//       tag: "practitioner-packages-table",
//       component: PractitionerPackagesTable,
//     },
//     {
//       tag: "edit-practitioner-profile",
//       component: EditProfile,
//     },
//   ];

export const makeProcessors = (config: Props[]) => config.map((processor) =>
    makeProcessor({ ...processor })
);
