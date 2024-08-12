
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
    <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">House of the Dragon</h1>
        <p>
        House of the Dragon, George R. R. Martin ve Ryan Condal tarafından HBO için yaratılan Amerikan fantastik drama dizisidir. Martin'in Ateş ve Kan kitabına dayanan dizi, Ejderhaların Dansı adı verilen iç savașa giden süreci ve bu iç savaşı ele alıyor.
        </p>
        <p>
            <span>IMDB:</span>
            <span className="text-yellow-400 ms-2 font-semibold">8.4</span>
        </p>

        <div className="flex gap-5">
            <button className="bg-red-600 p-2 rounded hover:bg-red-700">İzle</button>
            <button className="bg-blue-600 p-2 rounded hover:bg-blue-700">Listeye Ekle</button>
        </div>
    </div>

        <div>
            <img className="max-h-[300px] hero-img my-4 object-contain" src="https://img.uhdpaper.com/wallpaper/house-of-the-dragon-rhaenyra-targaryen-alicent-hightower-474@0@h-thumb.jpg?dl" alt="" />
        </div>
    </div>
  )
}

export default Hero