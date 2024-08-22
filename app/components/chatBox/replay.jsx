"use client"
import Vectore from "Icon/Vector_replay.svg"
const ChatBox =({hour,min})=>{

    return(
        <>
            {/* <div id="chatboxgpt" className={"w-full h-full flex flex-col scroll-smooth	 transition-all overflow-y-scroll snap-end mb-[10px] mx-4 rounded-[10px] " + (props.status == "flex"?"hidden":"flex")}> */}

            <section className="w-full mb-[10px]">
            <div className="flex float-left relative  flex-col lg:max-w-[48vw] max-w-[80vw] w-fit  text-stone-700 px-5 py-3 bg-gray-300 rounded-2xl my-2 lg:mx-1">
            <div className='absolute -bottom-[1.8px] -left-[5.7px]'>
                        <Vectore/>
                    </div>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <small className="text-[#9C9CA3]">{hour}:{min}</small>
                </div>
            </section>

            {/* </div> */}
        </>
    )
}
export default ChatBox