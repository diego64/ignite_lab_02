import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react";

import '@vime/core/themes/default.css';

export function Video() {
  return(
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="Ox_zb2cs9zM"/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - O início da especialização em ReactJS
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Na aula 1 você vai entender quais são as oportunidades que você pode ter se especializando em ReactJS e porque essa é a decisão mais inteligente pra sua carreira no momento! E também vamos dar início ao projeto que vamos desenvolver nessa semana: uma plataforma de conteúdos em vídeo. Bora codar!
            </p>

            <div className="flex items-center gap-4 mt-6">
            <img
              className="h-16 w-16 rounded-full border-2 border-blue-500"
              src="https://github.com/diego3g.png"
              alt="Imagem"
            />

            <div className="leading-relaxed">
              <strong className="font-bold text-2xl block">Diego Fernandes</strong>
              <span className="text-gray-500 text-sm block">Co-fundador e CTO na Rocketseat</span>
            </div>
          </div>
        </div>

          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24}/>
              Comunidade do discord
            </a>

            <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-color">
              <Lightning size={24}/>
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretcht gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={20}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text2xl">Material complementar</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Acesse o material complementar para acelerar o seu desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 items-center">
                <CaretRight size={24}/>
              </div>
            </a>

            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretcht gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <Image size={20}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text2xl">Wallpapers exclusivos</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                </p>
              </div>
              <div className="h-full p-6 items-center">
                <CaretRight size={24}/>
              </div>
            </a>
          </div>
      </div>
    </div>
  )
}