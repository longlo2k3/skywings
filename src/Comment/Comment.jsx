import React, { useRef, useEffect,useState } from "react";
import CommentComponent from "./CommentComponent";
import Client1 from "../assets/client-1.jpg"
import Client2 from "../assets/client-2.jpg"
import Client3 from "../assets/client-3.jpg"
import Client4 from "../assets/client-4.jpg"
import { motion } from "framer-motion";
const Comment = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Thêm state cho chỉ số hiện tại

  const comments = [ // Tạo mảng chứa các bình luận
    { img: Client1, name: "John Adams", career: "Travel Blogger", comment: "Skywings has completely transformed my travel experience..." },
    { img: Client2, name: "Emily Thompson", career: "Adventure Enthusiast", comment: "My recent adventure with Skywings was nothing short of spectacular..." },
    { img: Client3, name: "Sarah Lee", career: "Cultural Historian", comment: "Skywings offered a transformative experience for my research..." },
    { img: Client4, name: "Sarah Lee", career: "Cultural Historian", comment: "Skywings offered a transformative experience for my research..." },
    { img: Client1, name: "John Adams", career: "Travel Blogger", comment: "Skywings has completely transformed my travel experience..." },
    { img: Client2, name: "Emily Thompson", career: "Adventure Enthusiast", comment: "My recent adventure with Skywings was nothing short of spectacular..." },
    { img: Client3, name: "Sarah Lee", career: "Cultural Historian", comment: "Skywings offered a transformative experience for my research..." },
    { img: Client4, name: "Sarah Lee", career: "Cultural Historian", comment: "Skywings offered a transformative experience for my research..." },
  ];

  const nextComment = () => { // Hàm chuyển đến bình luận tiếp theo
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };
  
    
  useEffect(() => { // Thêm useEffect để tự động chuyển đổi bình luận
    const interval = setInterval(() => {
      nextComment();
    }, 3000); // Thay đổi bình luận mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);
  return (
    <section className="my-32 gap-4 lg:mx-40 mx-4 ">
      <div className="min-w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div className="text-center"
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{
              duration: 0.5,
              delay:0.4,
              type:"spring",
              stiffness:120,
              dumping:10
          }}
        >
          <h1  className="text-4xl font-semibold">Loved By Over Thousand Travelers</h1>
          <p className="text-gray-600"><span className="block">Discover the stories of wanderlust and cherished memories through </span><span>the eyes of our valued clients.</span></p>
        </motion.div>
        <motion.div className="swiper flex flex-row justify-center translate-x-[203px] items-center gap-10 mt-14 "
           drag="x"
           dragConstraints={{left: -comments.length*203, right: comments.length*203}} // Điều chỉnh khoảng cuộn
           whileTap={{ cursor: "grabbing" }}
           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           transition={{
              duration: 0.5,
              delay:0.4,
              type:"spring",
              stiffness:120,
              dumping:10
          }}
        >
          {comments.map((value, index) => <CommentComponent key={index} {...value} />)}

        </motion.div>
      </div>
    </section>
  );
}

export default Comment;

 

