/** Props are IDs of terms to fetch from the WordPress REST API
 * @example
 * {
 *   terms: [1, 2, 3]
 * }
 * @property {number[]} terms - Array of term IDs
 */
export interface Props {
  terms: number[];
  taxonomy: string;
  fieldname?: string;
}

/** TechTerm interface of a stack taxonomy term
 * @example
 * {
 *   id: 1,
 *   name: "React",
 *   acf: {
 *     tech_logo: 123
 *   },
 *   image: {
 *     source_url: "https://example.com/wp-content/uploads/2021/08/react-logo.png"
 *   }
 * } 
 * @property {number} id - Term ID
 * @property {string} name - Term name
 * @property {object} acf - Term Advanced Custom Fields
 * @property {number} acf.tech_logo - Term logo media ID
 * @property {object} image - Term logo media object
 * @property {string} image.source_url - Term logo media URL
 * @see {@link https://developer.wordpress.org/rest-api/reference/taxonomies/#definition-3|WordPress REST API}
 * @see {@link https://developer.wordpress.org/rest-api/reference/media/#definition|WordPress REST API}
 */
export interface TechTerm {
  id: number;
  name: string;
  acf: {
    tech_logo: number | null;
  };
  image?: {
    source_url: string | null;
  };
}
