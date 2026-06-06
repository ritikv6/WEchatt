import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';

function Feature() {
  return (
    <div className="grid grid-cols-3 gap-8 px-16 py-10">
      <div className="bg-[#f0f3f9] rounded-xl shadow-md p-8 border justify-around items-center flex">
        <img
          src={feature1}
          alt="Instant Messaging"
          className="h-20 mr-4 w-auto"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800">
            Instant Messaging
          </h2>
          <p className="mt-3 text-gray-600">
            Send messages instantly and see who's online.
          </p>
        </div>
      </div>

      <div className="bg-[#f0f3f9] rounded-xl shadow-md p-8 border flex justify-between items-center">
        <img
          src={feature2}
          alt="Create Groups"
          className="h-20 w-auto mr-5"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800">Create Groups</h2>
          <p className="mt-3 text-gray-600">
            Collaborate easily with team and friends.
          </p>
        </div>
      </div>

      <div className="bg-[#f0f3f9] rounded-xl shadow-md p-8 border flex justify-between items-center">
        <img
          src={feature3}
          alt="Secure & Private"
          className="h-20 w-auto object-contain"
        />

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800">Secure & Private</h2>

          <p className="mt-3 text-gray-600">
            Your chats are safe and encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}



export default Feature;