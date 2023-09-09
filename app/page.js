"use client"
import Image from "next/image";
import { useState } from "react"
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };


  const handleGet = async () => {
    try {
      let response = await fetch(`https://api.github.com/users/${inputValue}`)
      if (response.ok) {
        const userData = await response.json();
        setData(userData)
        console.log(userData.following);
      } else {
        alert("User not found or other error occurred.")
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <>


      <div className="bg-[#D6EFFF] py-10 min-w-full ">
        <div className="    ">
          <div className="text-[#33B1FF] font-mono text-3xl text-center">Github User Finder</div>
          <div className="text-center py-10">
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your user name"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div className="text-center"><button onClick={handleGet} className="bg-[#33B1FF] hover:bg-[#1FA9FF] text-white font-bold py-2 px-4 rounded">
            Get Data
          </button>
          </div>


          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b  font-medium  border-[#33B1FF]">
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Profile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Followers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Following</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Public repos</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Github</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Action</th>
                </tr>
              </thead>


              <tbody>

                {/* <tr  className="border-b  font-medium  border-[#33B1FF]">
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">1</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider rounded-full"> <Image src={data.avatar_url} alt="asd"  width={75} height={75} /></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{data.login}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{data.followers}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{data.following}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{data.public_repos}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{data.url}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Action</th>
                  </tr> */}
                {/* {data.map((item, i) => (
7
                  <tr key={i} className="border-b  font-medium  border-[#33B1FF]">
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{i + 1}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider rounded-full"> <Image src={item.avatar_url} alt={adsf} width={75} height={75} /></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.login}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.followers}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.following}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.public_repos}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{item.url}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Action</th>
                  </tr>

                ))} */}
              </tbody>
            
            </table>

          
            <div className="flex  p-10">
              <div className="px-10">
                <img src={data.avatar_url}  width={70} height={70} className='rounded-full' />
              </div>
              <div className="px-20"> {data.name}</div>
              <div className="px-18">{data.followers}</div>
              <div className="px-32">{data.following}</div>
              <div className="px-32"> {data.public_repos}</div>
              <div className="px-">{data.html_url}</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
