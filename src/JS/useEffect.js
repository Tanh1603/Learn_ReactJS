import React, {useEffect, useState} from "react";
// VD1
// const tabs = ["posts", "photos", "albums"];
// function Content ( ) {
//     const [title, setTitle] = useState("");
//     const [posts, setPosts] = useState([]);
//     const [type, setType] = useState("posts");
//     const [showGoToTop, setShowGoToTop] = useState(false);
//     // useEffect( () => {
//     //     fetch("https://jsonplaceholder.typicode.com/posts")
//     //         .then(response => response.json())
//     //         .then(posts => 
//     //             (setPosts(posts))
                
//     //         )
//     // }, [])

//     useEffect( () => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(response => response.json())
//             .then(data => 
//                 (setPosts(data))
                
//             )
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowGoToTop(window.scrollY >= 200);            
//         }
//         window.addEventListener("scroll", handleScroll)

//         // clean up goij truoc khi bi unmounted
//         return () => {
//             // window.removeEventListener("scroll", handleScroll)
//         }
//     }, [])


//     return (
//         <div>
//             {
//                 tabs.map( tab => {
//                     return (
//                         <button 
//                             onClick={() => setType(tab)}
//                             style={type === tab ? {
//                                 color: "#ffff",
//                                 backgroundColor: "#333",
//                             }: {}}
//                             key={tab}>  
//                             {tab}
//                         </button>
//                     )
//                 })
//             }
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />

//             <ul>
//                 {posts.map(post => {
//                     return (
//                         <li key={post.id}>{post.title}</li>
//                     )
//                 })}
//             </ul>

//             {
//                 showGoToTop && (
//                     <button
//                     style={{
//                         position:"fixed",
//                         right:20,
//                         bottom:20
//                     }}>
//                         Go to top
//                     </button>
//                 )
//             }
//         </div>
//     )
// }

// VD làm việc với add, remove event
// function Content() {
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//         }
//         window.addEventListener("resize", handleResize);
//         return (
//             window.removeEventListener("resize", handleResize)
//         )
//     }, [])
//     return (
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )
// }

// VD làm việc với time
// function Content() {
//     const [countDown, setCountDown] = useState(180);

//     useEffect(() => {
//         const timerId =  setInterval(() => {
//             setCountDown(prev => prev - 1);
//         }, 1000)
//         return () => clearInterval(timerId);
//     }, [])

//     return(
//         <div>
//             <h1>{countDown}</h1>
//         </div>
//     )
// }

// vd làm việc với preview avatar clean up fn luôn được gọi trước khi callback đc gọi(trừ khi đc mount)
// function Content() {
//     const [avatar, setAvatar] = useState();

//     useEffect(() => {
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview);
//         }
//     }, [avatar])
//     const handleReviewAvatar = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             file.preview = URL.createObjectURL(file);
//             setAvatar(file)
//         }
//     }

//     return (
//         <div>
//             <input type="file"
//                 onChange={handleReviewAvatar} />
//             {
//                 avatar && (
//                     <img src={avatar.preview} alt="" width="80%" />
//                 )
//             }
//         </div>
//     )
// }


// VD xử lí thời gian thực  chat app
// const lessons =  [
//     {
//         id: 1,
//         name: "ReactJS là gì? Tại sao nên học"
//     },
//     {
//         id:2,
//         name: "SPA/MPA là gì ?"
//     },
//     {
//         id: 3,
//         name: "Arrow function"
//     }
// ]
// function Content() {
//     const [lessonId, setLessonId] = useState(1);

//     useEffect( () => {
//         const handleComment = ({detail}) => {
//             console.log(detail);   
//         }
//         window.addEventListener(`lesson-${lessonId}`, handleComment)
//         return () => window.removeEventListener(`lesson-${lessonId}`, handleComment)
//     }, [lessonId])

//     return (
//         <div>
//             {
//                 lessons.map( (lesson) => (
//                     <li
//                     style={{color: lesson.id === lessonId ? "red" : "#333"}}
//                     key={lesson.id}
//                     onClick={() => setLessonId(lesson.id)}>
//                         {lesson.name}
//                     </li>
//                 ))
//             }
//         </div>
//     )
// }
// export default Content
