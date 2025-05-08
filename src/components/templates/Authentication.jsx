const Authentication = ({ children, title }) => {
    return (
        <div style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
        }} className="min-h-screen bg-gradient-to-br flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8">
                <div className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold">🏕️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-red-700">Bienvenido a</h2>
                    <h1 className="text-3xl font-bold text-gray-100">Casa Campo Arequipa</h1>
                </div>
                {children}
            </div>
        </div >
    );
};

export default Authentication;