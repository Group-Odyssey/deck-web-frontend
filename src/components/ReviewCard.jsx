export default function ReviewCard({user, comment, star}){
    return (
        <div className="p-8 rounded-2xl bg-[#F0F0F0] shadow-lg w-80">
            <div className="flex justify-start items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <p className="text-[#6D6D6D]">{user}</p>
            </div>
            <div className="flex text-left items-center mb-4 font-bold">
                {comment}
            </div>
            <div className="flex justify-end">
                {Array.from({ length: star }).map((_, index) => (
                    <span key={index}>⭐</span>
                ))}
            </div>
        </div>
    );
}