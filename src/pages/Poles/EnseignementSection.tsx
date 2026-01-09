import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { enseignementFacultes } from "../../constants";

export default function EnseignementSection() {
  return (
    <section className="min-h-screen bg-linear-to-b from-slate-50/50 to-white/50">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-[#163547] via-[#1e3a4f] to-[#2C5159] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              Pôle{" "}
              <span className="text-[#CBAF68]">Enseignement à Distance</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Nos 7 facultés offrent des formations numériques flexibles et
              innovantes pour former les leaders de demain.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#163547] hover:bg-slate-50 font-semibold px-8 h-12 shadow-lg"
            >
              Explorer les facultés
            </Button>
          </div>
        </div>
      </div>

      {/* Liste des facultés */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#163547] mb-6">
            Nos Facultés
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#163547] to-[#2C5159] mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez nos facultés spécialisées, conçues pour une éducation
            numérique d’excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {enseignementFacultes.map((faculte, index) => (
            <Link to={faculte.href} key={faculte.code}>
              <Card
                className={`
                    group relative  bg-white/90 backdrop-blur-sm
                    border-0 shadow-lg hover:shadow-2xl 
                    hover:-translate-y-3 hover:rotate-1 transition-all duration-700 ease-out
                    hover:ring-2 ${faculte.ringColor}
                    before:absolute before:inset-0 before:bg-linear-to-br 
                    before:${faculte.gradient} before:opacity-0 
                    group-hover:before:opacity-10 before:transition-all 
                    before:duration-700
                    transform-gpu perspective-1000
                    animate-fade-in-up
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                  borderRadius: "20px",
                }}
              >
                {/* Ping indicator */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="relative">
                    <div className="w-3 h-3 bg-[#163547] rounded-full"></div>
                    <div className="absolute top-0 left-0 w-3 h-3 bg-[#163547] rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`
                        p-5 rounded-sm shadow-xl border-2 border-white/30
                        bg-linear-to-br ${faculte.gradient}
                        group-hover:scale-125 group-hover:-rotate-6 transition-all duration-700
                        group-hover:shadow-2xl backdrop-blur-sm
                    `}
                  >
                    <div
                      className={`
                        text-white group-hover:${faculte.accentColor} 
                        transition-all duration-500 w-8 h-8 flex items-center justify-center
                        group-hover:scale-110
                    `}
                    >
                      {faculte.icon}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4 pt-16 relative z-10">
                  <CardTitle className="text-xl font-bold text-[#163547] group-hover:text-[#2C5159] transition-colors duration-500 text-center leading-tight">
                    {faculte.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pb-6">
                  <CardDescription className="text-gray-600 leading-relaxed text-center line-clamp-3 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {faculte.description}
                  </CardDescription>

                  {/* Stats or features could go here */}
                  <div className="flex justify-center mb-4">
                    <div className="h-1 w-12 bg-linear-to-r from-[#163547] to-[#2C5159] rounded-full opacity-30 group-hover:opacity-60 group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 border-t border-gray-100/80 bg-gray-50/50 group-hover:bg-white/80 transition-colors duration-500">
                  <div className="flex items-center justify-between w-full">
                    <span
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold 
                        bg-linear-to-r from-[#163547]/10 to-[#2C5159]/10 
                        text-[#163547] border border-[#163547]/20
                        group-hover:from-[#163547]/20 group-hover:to-[#2C5159]/20
                        group-hover:border-[#163547]/30 transition-all duration-300
                        group-hover:scale-105"
                    >
                      {faculte.code}
                    </span>

                    <div className="flex items-center text-[#163547] group-hover:text-[#2C5159] transition-colors duration-300">
                      <span className="text-sm font-medium mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        Découvrir
                      </span>
                      <div className="p-2 rounded-full bg-[#163547]/5 group-hover:bg-[#163547]/15 transition-all duration-300 group-hover:rotate-12">
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </CardFooter>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(22,53,71,0.1)_0%,transparent_50%)]"></div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
