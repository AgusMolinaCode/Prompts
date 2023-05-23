
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    
    <section className='w-full max-w-full flex-start px-2 lg:px-52 flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Prompt</span>
      </h1>
      <p className='desc text-left font-outfit max-w-md'>
        Crea los mejores Pormpts para ayudar a la comunidad!
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 border-2 border-slate-500  p-4 rounded-2xl bg-secondary'
      >
        <label>
          <span className='font-outfit text-primary  font-semibold lg:text-xl text-gray-700'>
            Tú AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Escribe aqui tu Prompt'
            required
            className='form_textarea border-2 text-secondary border-slate-500 bg-primary font-outfit'
          />
        </label>

        <label>
          <span className='font-outfit text-primary font-semibold lg:text-xl '>
            Tags para tu Prompt{" "}
            <span className='font-outfit'>
              (#blog, #javascript, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input text-secondary border-2 border-slate-500 bg-primary font-outfit'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-red-500 font-outfit lg:text-xl'>
            Cancelar
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 lg:text-xl rounded-full black_btn bg-button text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
    
  );
};

export default Form;