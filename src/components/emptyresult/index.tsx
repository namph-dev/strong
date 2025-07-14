import img from '@/assets/images/backgrounds/not-found-404.png';

const EmptyResult = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 md:items-end md:flex-row">
            <img
                width={70}
                height={40}
                src={img.src}
                alt="Not found"
                className="object-cover p-2 rounded-lg "
            />
            <div className="">
                <div>Oops!...</div>
                <div>Does not find any result </div>

            </div>
        </div>
    )

}
export default EmptyResult;