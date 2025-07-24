const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">CONTACT</h2>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
              <h3 className="text-2xl font-bold text-black mb-2">KANG GYEONG SEOK</h3>
              <p className="text-gray-600 font-medium mb-1">FRONTEND DEVELOPER</p>
              <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-6"></div>
              
              <div className="space-y-2 text-black text-sm mb-6">
                <p><span className="font-medium">Position |</span> Developer, Researcher</p>
                <p><span className="font-medium">Email |</span> handy.kang.dev@gmail.com</p>
              </div>
              
              <p className="text-gray-600 text-sm mb-6">
                유저에게 편리함을 주는 서비스를 만드는 개발자
              </p>
              
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📧</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">💼</span>
                </div>
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;