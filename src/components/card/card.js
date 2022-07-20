import styles from "./card.module.scss"

export default function Card({
    data, onItemSelected
}) {
    // console.log("data in card", data)
    return (
        <div className={styles.cardMainContainer} >
            {data.slice(0, 6).map(item => {
                return (
                    <div className={styles.containerStyle} onClick={() => onItemSelected(item, data)}>
                        <img src={item.images} className={styles.cardImageStyle} />
                        {/* <div className={styles.cardDetails}> */}
                        {/* <p style={{ margin: 0 }}> */}
                        <p>
                            <p className={styles.cardTitle}>{item.title}</p>
                            <p className={styles.cardContent}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </p>
                            <button className={styles.buttonReadStyle2}> Read more</button>
                        </p>
                        {/* </p> */}
                        {/* </div> */}
                    </div>
                )
            })
            }
        </div>
    )
}