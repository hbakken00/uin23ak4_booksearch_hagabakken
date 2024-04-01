import styles from '../../styles/styles.scss';



const BookCard = ({ book }) => {
    const { title, first_publish_year, author_name, key, cover_i } = book;
    const coverImageUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : '/path/to/default/image.jpg'; 

  

    const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(title)}`;
  
    return (
      <div id="bookdata" >

        {cover_i && (<img id="coverImg" src={coverImageUrl} alt={`Cover of ${title}`}/>)}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.year} >Først publisert: {first_publish_year}</p>
        {author_name && <p className={styles.forfatter} >Forfattet av: {author_name.join(', ')}</p>}
        <a className={styles.amazon} href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">Sjekk ut på Amazon</a>

      </div>
    );
  };
  
  export default BookCard;
  