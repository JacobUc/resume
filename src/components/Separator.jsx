import separator from '../img/separator.png'

export default function Separator(){

    return(
        <div className='mt-16 mb-16'>
            <img
                src={separator}
                className='w-20'
                alt='Separator'
            />
        </div>
    );
}