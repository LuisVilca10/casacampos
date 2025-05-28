import { Facebook, Twitter, Linkedin, Instagram, Pencil } from 'lucide-react';

function MyProfile() {
    return (
        <div className="space-y-6">
            {/* Encabezado del perfil */}
            <div className="card bg-base-100 shadow-md p-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://demo.tailadmin.com/src/images/user/owner.jpg"
                            alt="User"
                            className="w-20 h-20 rounded-full object-cover border"
                        />
                        <div>
                            <h2 className="text-xl font-bold">Musharof Chowdhury</h2>
                            <p className="text-sm text-gray-500">Team Manager | Arizona, United States.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <button className="btn btn-circle btn-outline"><Facebook size={18} /></button>
                        <button className="btn btn-circle btn-outline"><Twitter size={18} /></button>
                        <button className="btn btn-circle btn-outline"><Linkedin size={18} /></button>
                        <button className="btn btn-circle btn-outline"><Instagram size={18} /></button>
                        <button className="btn btn-outline ml-2"><Pencil size={16} className="mr-2" /> Edit</button>
                    </div>
                </div>
            </div>

            {/* Información personal */}
            <div className="card bg-base-100 shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <button className="btn btn-outline btn-sm"><Pencil size={16} className="mr-2" /> Edit</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">First Name</p>
                        <p className="font-medium">Chowdhury</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Last Name</p>
                        <p className="font-medium">Musharof</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Email address</p>
                        <p className="font-medium">randomuser@pimjo.com</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">+09 363 398 46</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">Bio</p>
                        <p className="font-medium">Team Manager</p>
                    </div>
                </div>
            </div>

            {/* Dirección */}
            <div className="card bg-base-100 shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Address</h3>
                    <button className="btn btn-outline btn-sm"><Pencil size={16} className="mr-2" /> Edit</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Country</p>
                        <p className="font-medium">United States</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">City/State</p>
                        <p className="font-medium">Arizona, United States</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Postal Code</p>
                        <p className="font-medium">ERT 2489</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">TAX ID</p>
                        <p className="font-medium">AS4568384</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;