const title = "NFinityLabs";
const description = "";
const defaultDescription = "";
const image = "";
const pageLink = "";
const pageKeywords = "";
function Seo(){
    const defaultDescription = `Votre prospection commerciale B2B automatisée et sur-mesure pour booster votre croissance et faire gagner du temps à vos commerciaux.`
    return(
        <div>
			<title>{title}</title>
			<meta property="og:locale" content="fr_FR" />
			<meta name="description" content={description} />
			<meta
				property="og:description"
				content={description || defaultDescription}
			/>
			<meta property="og:site_name" content="Croitr" />
			<meta property="og:url" content="https://croitr.com/" />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			{image && <meta property="og:image" content={image} />}
			<link rel="canonical" href={`https://croitr.com${pageLink}`} />

			{pageKeywords && (
				<meta property="keywords" content={pageKeywords} />
			)}

			<script
				dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-KV9LXND');`,
				}}
			></script>
		</div>
    )
}

export default Seo