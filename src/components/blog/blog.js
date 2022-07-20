// // import styles from '../styles/blog1.module.scss';
// // import { FaAngleUp, FaCircleUp, FaAngleRight } from 'react-icons/fa';
// // import List from './list';
// // import Campaign from './campaign';
// // import Card from './card';
// // import React, { useState, useEffect } from 'react';
// import { useEffect, useState } from 'react';
// import styles from './blog.module.scss'
// import { FaAngleUp, FaCircleUp, FaAngleRight } from 'react-icons/fa';



// export default function Blogs({ blogData }) {



//     const [isExpanded, setExpand] = useState(false);
//     const [isMobileView, setShow] = useState(false);
//     const [postData, setPostData] = useState([]);
//     const [postCardData, setPostCardData] = useState([]);
//     const [postCardDataRaw, setPostCardDataRaw] = useState([]);
//     const [postListData, setPostListData] = useState([]);
//     const [postListDataRaw, setPostListDataRaw] = useState([]);
//     const [postCampaignData, setPostCampaignData] = useState([]);
//     const [postCampaignDataRaw, setPostCampaigntDataRaw] = useState([]);
//     const [selectedBlogDetails, setSelectedBlogDetails] = useState(null);
//     const [data, setData] = useState([]);

//     const axios = require('axios');
//     var mainData = [];

//     useEffect(() => {
//         // getPosts()
//         getDummyPosts()
//     }, []
//     );

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     };


//     function handleListSelectedItem(selectedItem, mainData) {
//         console.log("selected list item is", selectedItem)
//         var cs = mainData.slice();
//         console.log("main data", mainData.length);
//         var w = filterData()
//         function filterData() {

//             var ab = cs // declaringthe clone data so that we can get original array again.


//             cs.forEach((item, index) => {
//                 if (selectedItem.title == item.title) {

//                     cs.splice(index, 1); //removes array from the index and cannot be recovered.


//                 }
//             })
//             console.log("cs lenghth", cs.length);
//             return cs
//         }

//         console.log("w length", w.length);

//         setPostListData(w);
//         setPostCampaignData(w);
//         setPostCardData(w);
//         setSelectedBlogDetails(selectedItem)
//     }


//     const getPosts = () => {
//         axios.get("https://stagesys.prabhupay.com/api/Event/EventList")
//             .then(function (response) {
//                 console.log("respponse is", response)
//                 if (response.data.data.length > 0) {

//                     var a = []
//                     response.data.data.forEach((i, index) => {
//                         console.log("Responsessss ", i)
//                         if (i.eventType.toLowerCase() == "blog") {
//                             var obj = {
//                                 "id": i.id,
//                                 "title": i.title,
//                                 "createdBy": i.subTitle,
//                                 "images": i.eventBanner,
//                                 "videos": [],
//                                 "content": i.description,
//                                 "createdDate": i.startDate,
//                                 "lastUpdated": []
//                             }
//                             a.push(obj)
//                         }
//                     });

//                     console.log("a is ====", a)
//                     setPostData(a)
//                     setSelectedBlogDetails(a[0])
//                     setPostCardData(a)
//                     setPostListData(a) // this data will be slice
//                     setPostCampaignData(a)
//                     setPostListDataRaw(a) // main Data whose data will never change
//                     setPostCampaigntDataRaw(a)
//                     setPostCardDataRaw(a) // main Data whose data will never change


//                     // console.log("Main main data", mainData.length);
//                     // console.log("state data of post", postData)
//                 }



//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });


//     }

//     //for dummy contents
//     const getDummyPosts = () => {
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//             .then(function (response) {
//                 // handle success
//                 console.log("response is", response.data);

//                 if (response.data.length > 0) {

//                     var a = []
//                     var b = []
//                     var c = []
//                     response.data.forEach((i, index) => {

//                         var obj = {
//                             "id": i.id,
//                             "title": i.title,
//                             "createdBy": "Test Shakya",
//                             "images": ['/heroImage.jpeg', '/sideImage.png', '/cardImage.jpeg'],
//                             "videos": [],
//                             "content": i.body,
//                             "createdDate": "February 2, 2022",
//                             "lastUpdated": "February 2, 2022"
//                         }


//                         a.push(obj)
//                     });

//                     setPostData(a)
//                     setSelectedBlogDetails(a[0])
//                     setPostCardData(a)
//                     setPostListData(a) // this data will be slice
//                     setPostCampaignData(a)
//                     setPostListDataRaw(a) // main Data whose data will never change
//                     setPostCampaigntDataRaw(a)
//                     setPostCardDataRaw(a) // main Data whose data will never change


//                     console.log("Main main data", mainData.length);
//                     // console.log("state data of post", postData)
//                 }
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });


//     }



//     return (


//         (selectedBlogDetails) ?


//             <div className={styles.mainContainer}>
//                 {/* main conatainer div row (blog contaienr and list view) */}

//                 <div className={styles.blogContainer}>
//                     {/* blog container column */}


//                     <div className={styles.blogNavbar}>

//                         <p className={styles.textColor1}>Home</p>


//                         <p><img src="/navbarArrow.png" height={15} width={20} /></p>

//                         <p className={styles.textColor2}>Blogs</p>
//                     </div>

//                     <div className={styles.hr}>
//                         <hr ></hr>

//                     </div>


//                     <div className={styles.blogHeader}>

//                         <b className={styles.blogTitleStyle}> {selectedBlogDetails.title} </b>
//                         <div className={styles.blogAuthor}>
//                             {/* <p className={styles.textColor1} >By </p> */}
//                             {/* <p style={{ marginLeft: 5 }}><b>{selectedBlogDetails.createdBy}</b></p> */}
//                             <p className={styles.textColor1} >{selectedBlogDetails.createdDate}</p>
//                         </div>
//                     </div>

//                     <div className={styles.blogHeroPage}>

//                         <img src={selectedBlogDetails.images} alt="hero image" className={styles.heroImageStyle} />

//                         <div>
//                             <p className={styles.blogContent}>

//                                 <div
//                                     dangerouslySetInnerHTML={{ __html: selectedBlogDetails.content }}
//                                 >

//                                 </div>
//                                 {(!isExpanded) &&
//                                     <span style={{ display: 'inline' }}> ...</span>
//                                 }

//                                 {(isExpanded) &&
//                                     <span style={{ display: 'inline' }}><br></br>

//                                         <div
//                                             dangerouslySetInnerHTML={{ __html: selectedBlogDetails.content }}
//                                         >

//                                         </div>
//                                         <img src={selectedBlogDetails.images} alt="hero image" className={styles.heroImageStyle} />
//                                         {/* <span>
//                                             {selectedBlogDetails.content}
//                                         </span> */}

//                                         <div
//                                             dangerouslySetInnerHTML={{ __html: selectedBlogDetails.content }}
//                                         >

//                                         </div>

//                                     </span>




//                                 }
//                             </p>
//                         </div>



//                         <button className={styles.buttonReadStyle} onClick={() => setExpand(!isExpanded)}> {(isExpanded) ? 'Read Less' : 'Read More'}</button>

//                     </div>

//                     <div className={styles.cardContainer} onClick={scrollToTop}>

//                         <Card data={postCardData} onItemSelected={(selectedItem) => handleListSelectedItem(selectedItem, postCardDataRaw)} />

//                     </div>

//                     <div className={styles.underDetailsListContainer}>
//                         <List gridView={true} listData={postListData} onItemSelected={(selectedItem) => handleListSelectedItem(selectedItem, postListDataRaw)} />
//                     </div>

//                 </div>

//                 <div className={styles.listCampaign}>

//                     <List listData={postListData} onItemSelected={(selectedItem) => handleListSelectedItem(selectedItem, postListDataRaw)} />

//                     <div className={styles.scrollArrowStyle}>
//                         <img src="/upArrowScroll.png" height={50} width={50} onClick={scrollToTop} />

//                     </div>


//                     <div onClick={scrollToTop}>
//                         <Campaign campaignData={postCampaignData} onItemSelected={(selectedItem) => handleListSelectedItem(selectedItem, postCampaignDataRaw)} />


//                     </div>


//                 </div>


//             </div>
//             :
//             <div>Loading ...</div>

//     )
// }


