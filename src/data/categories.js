import { data } from "autoprefixer"

const dataCategories = [
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/CEREALESGO_ChocolateBolsa20.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/CEREALESGO_ChocolateBolsa120.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/CEREALESGO_ColoresBolsa120.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/CEREALESGO_MacaritosBolsa120.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/CEREALESGO_MacatrigoBolsa120.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/CEREALESGO_ZucratrigoBolsa120.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/COSECHAIMPERIAL_BarrasBolsa6.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/COSECHAIMPERIAL_RojosBolsa200.png"
    },
    {
        categorie: "Confiteria",
        imgSrc: "/categorias/Confiteria/GOLDENFOODS_AzucaradasBolsa200.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/CASTAÑEDA_BlancoCaja1.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/CASTAÑEDA_TintoCaja1.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/HCASAINKA_BorgonaBotella750.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/HCASAINKA_RoseBotella750.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/HCASAINKA_TintoBotella750.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/KLAUHOFF_Lata310.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/KLAUHOFF_Pack6.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/KOPERWIEK_Lata330.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/KOPERWIEK_Pack6.png"
    },
    {
        categorie: "Bebidas",
        imgSrc: "/categorias/Bebidas/SPARKRTD_Lata473.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/FARAON_Bolsa750.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/GRANADINO_Doypack100.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/GRANMARIA_SpaghettiBolsa500.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/GRANMARIA_SpaghettiBolsa900.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/GRANMARIA_TallarinBolsa500.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/GRANMARIA_TallarinBolsa900.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/PRONALCEDELSUR_Bolsa250.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/SOYA_Botella900.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/YASTA_Bolsa20.png"
    },
    {
        categorie: "Abarrotes",
        imgSrc: "/categorias/Abarrotes/YASTA_Bolsa25.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/JOLLY_AvenaPaquete100.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/JOLLY_SabilaPaquete100.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/MEDICARE_HisoposPaquete100.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/POMPIS_PanalBolsa8.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/SAIRO_ArganBotella750.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/SAIRO_AvenaBotella500.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/SAIRO_ManosDermoBotella500.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/SENSOFLUOR_Paquete2.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/SENSOFLUOR_Tubo75.png"
    },
    {
        categorie: "Cuidado_personal",
        imgSrc: "/categorias/Cuidado_personal/SENSOFLUOR_Unidad.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_DuraznoBotella900.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_DuraznoGalon.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_FresaBotella170.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_FresaBotella900.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_FresaGalon.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_VainillaBotella170.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_VainillaBotella900.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_VainillaGalon.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_Vaso115.png"
    },
    {
        categorie: "Lacteos",
        imgSrc: "/categorias/Lacteos/MIO_Vaso120.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/CLEANPOWER_Botella1.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/CLEANPOWER_Botella2.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/CLEANPOWER_Botella15.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/CLEANPOWER_Botella300.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/CLEANPOWER_Botella600.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/PARACAS_Paquete4.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/SUPERB_DesengrasanteBotella500.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/SUPERB_Doypack200.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/SUPERB_LavalozaBotella500.png"
    },
    {
        categorie: "Limpieza",
        imgSrc: "/categorias/Limpieza/SUPERB_Pote500.png"
    },
    {
        categorie: "Panaderia",
        imgSrc: "/categorias/Panaderia/KERRYS_BlancoBolsa400.png"
    },
    {
        categorie: "Panaderia",
        imgSrc: "/categorias/Panaderia/KERRYS_BrownieBolsa40.png"
    },
    {
        categorie: "Panaderia",
        imgSrc: "/categorias/Panaderia/KERRYS_IntegralBolsa400.png"
    },
    {
        categorie: "Panaderia",
        imgSrc: "/categorias/Panaderia/KERRYS_MarmoleadosBolsa40.png"
    },
    {
        categorie: "Panaderia",
        imgSrc: "/categorias/Panaderia/KERRYS_PastelitoBolsa800.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/CRUNCHIPS_Camote130.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/CRUNCHIPS_PapaBolsa130.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/FRUTOSSNACKS_ChiflesBolsa125.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/FRUTOSSNACKS_HabasBolsa80.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/FRUTOSSNACKS_HojuelasBolsa100.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/FRUTOSSNACKS_ManiBolsa80.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/FRUTOSSNACKS_PapasBolsa125.png"
    },
    {
        categorie: "Piqueos",
        imgSrc: "/categorias/Piqueos/FRUTOSSNACKS_CanchaBolsa80.png"
    }
]

export default dataCategories;