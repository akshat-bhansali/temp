"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Hackathon from "@/models/Hackathon";

const getCurrentUser = async (email: any) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/getCurrentUser?userEmail=${email}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch hackathons");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading hackathons: ", error);
  }
};

const Page = () => {
  const { data: session }: any = useSession();

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        if (data) {
          setHackathons(data.hackathons);
        }
      } catch (error) {
        console.error("Error fetching hackathons: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCurrentUserData = async () => {
      try {
        const data = await getCurrentUser(session?.user.email);
        if (data) {
          setCurrentUser(data.currentUser);
        }
      } catch (error) {
        console.error("Error fetching current user data: ", error);
      }
    };

    if (session?.user?.email) {
      fetchCurrentUserData();
    }
  }, [session?.user?.email]);
  return (

  

    //            
    //             
    //           </div>

    //       </div>
    //   );
    // };
    <>
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-600">
            Email: {currentUser?.["email"]}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Username: {currentUser?.["username"]}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Link: {currentUser?.["link"]}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Repo: {currentUser?.["repo"]}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Hackathons:  
            </p>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
            {currentUser?.["hackathon"]?.map((h:any,id:any)=>{
                    return(<li>{h}</li>)
                  })}
            </ul>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                tags
              </h4>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-900  text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <img
                  src={currentUser?.["avatar"]}
                  alt="Profile Picture"
                  className="rounded-full h-35 w-35"
                />
                <p className="font-semibold text-gray-600 pt-10 text-1xl">
                {currentUser?.["name"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Page;
