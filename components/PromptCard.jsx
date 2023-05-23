'use client'

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname,useRouter } from "next/navigation"

const PromptCard = ({post,handleTagClick,handleEdit,handleDelete}) => {

  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()
  
  const [copied, setCopied] = useState('')

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => {
      setCopied('')
    }
    , 2000)

  }

  return (
    <div className="rounded-lg border border-gray-300 bg-secondary p-6 gap-2">
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
            <Image
              src={post.creator?.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />

            <div className="flex flex-col">

              <h3 className="font-outfit font-semibold text-indigo-500">
                {post.creator?.username}
              </h3>

              <p className="font-outfit text-sm text-accent">
                {post.creator?.email}
              </p>

            </div>

          </div>

          <div className="flex gap-2" onClick={handleCopy}>
            <Image 
              src={copied === post.prompt 
                ? '/assets/icons/check2.svg' : '/assets/icons/copy2.svg'}
              alt="copy_icon"
              width={20}
              height={20}
            />
            <p className="font-outfit font-medium text-accent text-sm">{copied === post.prompt ? 'Copiado!' : 'Copiar'}</p>
            
          </div>
        </div>

        <p className="my-4 font-outfit text-md text-accent">{post.prompt}</p>
        <p className="font-outfit text-sm text-secondary cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>

        {session?.user.id === post.creator?._id && pathName === '/profile' && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p className="font-outfit text-[1rem] green_gradient font-bold cursor-pointer" onClick={handleEdit}>
              Edit
            </p>
            <p className="font-outfit text-[1rem] text-red-400 font-bold cursor-pointer" onClick={handleDelete}>
              Delete
            </p>
          </div>
        )}
    </div>
  )
}

export default PromptCard

