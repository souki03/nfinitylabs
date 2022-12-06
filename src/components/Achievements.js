import '../styles/section.css'

import img from '../assets/image/experts.mov'

import vitality from '../assets/image/achievements/vitality.png'
import blvck from '../assets/image/achievements/blvck.png'
import shinsekai from '../assets/image/achievements/shinsekai.png'

function Achievements(){
    return(<div className="section">
    <section className="py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Nos Accomplissements</h2>
            <p className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-gray-300 lg:text-2xl">Utilisé par des entreprises réputées dans le monde entier</p>
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div className="overflow-hidden">
                <div className="px-8 py-12">
                    <div className="relative  mx-auto">
                        <img className="relative mx-auto" src={shinsekai} alt="" />
                    </div>
                    <blockquote className="mt-7">
                        <p className="lg:text-2xl text-white">Création du premier Mangaverse</p>

                        <p className="lg:text-2xl text-white">$7,000,000 Revenu Total</p>

                        <p className="lg:text-2xl text-white">200,000 Membres</p>

                        <p className="lg:text-2xl text-white">250,000 Abonnés</p>
                    </blockquote>
                </div>
            </div>

            <div className="overflow-hidden">
                <div className="px-8 py-12">
                    <div className="relative  mx-auto">
                        <img className="relative mx-auto" src={blvck}  alt="" />
                    </div>
                    <blockquote className="mt-7">
                        <p className="lg:text-2xl text-white">Transition du Web 2.0 au Web 3.0</p>

                        <p className="lg:text-2xl text-white">$8,000,000 Revenu Total</p>

                        <p className="lg:text-2xl text-white">215,000 Membres</p>

                        <p className="lg:text-2xl text-white">280,000 Abonnés</p>
                    </blockquote>
                </div>
            </div>

            <div className="overflow-hidden">
                <div className="px-8 py-12">
                    <div className="relative  mx-auto">
                        <img className="relative mx-auto" src={vitality} alt="" />
                    </div>
                    <blockquote className="mt-7">
                        <p className="lg:text-2xl text-white">Premier soutien pour gagner un projet</p>

                        <p className="lg:text-2xl text-white">Expérience gratuite - Réclamation de 15 000 jetons</p>

                        <p className="lg:text-2xl text-white">20,000 Membres</p>

                        <p className="lg:text-2xl text-white">680,000 Abonnés</p>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>)
}

export default Achievements