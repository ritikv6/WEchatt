import whychoose1 from '../assets/whychoose1.png';
import whychoose2 from '../assets/whychoose2.png';
import whychoose3 from '../assets/whychoose3.png';

function WhyChoose() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#173f81] justify-center items-center flex">
        Why Choose WEchatt?
      </h2>

      <div className="grid grid-cols-3 gap-8 px-16 py-10 justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <img
            src={whychoose1}
            alt="Easy to Use"
            className="h-auto w-auto mb-4"
          />
          <h3 className="text-3xl font-semibold mt-6 text-[#0b3274]">
            Easy to Use
          </h3>
          <p className="mt-3 text-gray-700 max-w-sm">
            Intuitive interface designed for seamless communication.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={whychoose2}
            alt="Fast & Reliable"
            className="h-auto w-auto mb-4"
          />
          <h3 className="text-3xl font-semibold mt-6 text-[#0b3274]">
            Fast & Reliable
          </h3>
          <p className="mt-3 text-gray-700 max-w-sm">
            Experience lightning-fast performance and reliable connectivity.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={whychoose3}
            alt="Stay Connected"
            className="h-auto w-auto mb-4"
          />
          <h3 className="text-3xl font-semibold mt-6 text-[#0b3274]">
            Stay Connected
          </h3>
          <p className="mt-3 text-gray-700 max-w-sm">
            Never miss a beat with real-time updates and notifications.
          </p>
        </div>
      </div>
      <hr className="border-gray-300 w-[90%] h-1.25  mx-auto border-t-2 mb-4 "/>
    </div>
  );
}



export default WhyChoose;