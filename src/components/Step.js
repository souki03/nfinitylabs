import '../styles/section.css'

function Step(){
    return(<div className="section">
        <section className="py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Experts en technologie et développement blockchain</h2>
            <p className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-gray-300 lg:text-2xl">Nous sommes une équipe de personnes passionnées, chacune avec ses propres compétences et son propre savoir-faire, qui
sont profondément impliqués dans <mark className='text-blue-500 bg-transparent lg:text-2xl'>Web 3.0</mark>. Notre objectif est de soutenir et de mettre en relation nos clients avec
cet écosystème tout en aidant au développement et à la croissance de leurs projets pour
créer de la valeur et de l'utilité.</p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
            <li className="relative flex items-start">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div className="ml-6">
                    <h3 className="lg:text-3xl lg:text-2xl font-semibold text-white">1. Découvrir les besoins</h3>
                    <p className="lg:text-2xl mt-4 text-base text-gray-300">La première réunion au cours de laquelle nous définissons les objectifs et les défis de votre projet.</p>
                </div>
            </li>
            <li className="relative flex items-start">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                </div>
                <div className="ml-6">
                    <h3 className="lg:text-3xl lg:text-2xl font-semibold text-white">2. Devis sur mesure</h3>
                    <p className="lg:text-2xl mt-4 text-base text-gray-300">Créez un devis personnalisé qui répond entièrement à vos besoins tels que discutés lors de l'appel de découverte.</p>
                </div>
            </li>
            <li className="relative flex items-start">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                </div>
                <div className="ml-6">
                    <h3 className="lg:text-3xl lg:text-2xl font-semibold text-white">3. Présentation de la stratégie</h3>
                    <p className="lg:text-2xl mt-4 text-base text-gray-300">Votre plan de déploiement ou de mise en œuvre stratégique décrit les étapes que notre équipe ou notre organisation suivra pour atteindre un objectif. Il s'agit de votre feuille de route pour mener à bien votre projet.</p>
                </div>
            </li>

            <li className="relative flex items-start">
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div className="ml-6">
                    <h3 className="lg:text-3xl lg:text-2xl font-semibold text-white">4. Gestion continue</h3>
                    <p className="lg:text-2xl mt-4 text-base text-gray-300">Amélioration continue au sein du projet, en activant les leviers pour gagner en performance et atteindre ses objectifs.</p>
                </div>
            </li>
        </ul>
    </div>
</section>

    </div>)
}
export default Step