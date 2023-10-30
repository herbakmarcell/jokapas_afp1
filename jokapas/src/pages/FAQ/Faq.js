export function Faq({question, answer}) {
    return(
        <div>
            <h2 className='title'>{question}</h2>
            <p className='text'>{answer}</p>
        </div>
    )
}