import type { $infer } from '../../dbschema/edgeql-js';
import type { selectPosts } from './queries';

export type Posts = $infer<typeof selectPosts>;
