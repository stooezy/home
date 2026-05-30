import type { PostType } from '~/utils/posts'

export function PostDetail({ post }: { post: PostType }) {
  return (
    <>
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </>
  )
}
