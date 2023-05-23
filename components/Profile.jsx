import PromptCard from "./PromptCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (

    <section className="w-full">
      <div className="px-2 lg:px-52">
        <h1 className="head_text text-left">
          <span className="blue_gradient">{name} Profile</span>
        </h1>
        <p className="desc text-left">{desc}</p>
      </div>
      <div className='mt-10 pb-8 mx-auto grid px-3 lg:px-14 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3'>
        {data.map((post, index) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>

  )
}

export default Profile