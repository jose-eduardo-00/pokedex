import nameFirstLetterUp from "@/components/utils/nameFirstLetterUp/nameFirstLetterUp";
import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NatureCard({ nature }: { nature: any }) {
    const natureName = nameFirstLetterUp(nature)

    let increasedStatFirstLetterUp;
    let decreasedStatFirstLetterUp;
    if (!nature.increased_stat == false) {
        increasedStatFirstLetterUp = nameFirstLetterUp(nature.increased_stat)
    }
    if (!nature.decreased_stat == false) {
        decreasedStatFirstLetterUp = nameFirstLetterUp(nature.decreased_stat)
    }

    return (
        <div className="flex flex-col rounded-lg shadow-md shadow-slate-700 w-96 ">
            <h1 className="text-lg w-full text-center rounded-t-lg py-1 ">
                {natureName}
            </h1>
            <div className="flex flex-col w-full">
                <div className="flex text-center bg-slate-300 text-slate-600 py-2">
                    <p className="w-1/2">
                        {!nature.likes_flavor
                            ? "--"
                            : `Likes ${nature.likes_flavor.name} flavor`}
                    </p>
                    <p className="w-1/2">
                        {!nature.hates_flavor
                            ? "--"
                            : `Deslikes ${nature.hates_flavor.name} flavor`}
                    </p>
                </div>
                <div className="flex text-white h-1/3">
                    <div className="flex justify-center text-center w-1/2 bg-red-600 py-2 rounded-bl-lg">
                        <span className="flex items-center justify-center w-2/12">
                            <FontAwesomeIcon
                                icon={faAnglesUp}
                                className="w-1/2"
                            />
                        </span>
                        <p className="w-10/12">
                            {!increasedStatFirstLetterUp
                                ? "--"
                                : increasedStatFirstLetterUp}
                        </p>
                    </div>
                    <div className="flex justify-center text-center w-1/2 bg-blue-600 py-2 rounded-br-lg">
                        <p className="w-10/12">
                            {!decreasedStatFirstLetterUp
                                ? "--"
                                : decreasedStatFirstLetterUp}
                        </p>
                        <span className="flex items-center justify-center w-2/12">
                            <FontAwesomeIcon
                                icon={faAnglesDown}
                                className="w-1/2"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
