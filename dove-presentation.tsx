"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart, Users, Globe, Award, Sparkles, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DovePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Slide 1: Introducción
    {
      id: 1,
      title: "Dove: Transformando el Cuidado en Amor Propio",
      content: (
        <div className="text-center space-y-12">
          <div className="relative mb-12">
            <img
              src="/placeholder.svg?height=320&width=480"
              alt="Mujer aplicando crema Dove con sonrisa natural y auténtica"
              className="mx-auto rounded-lg shadow-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50/10 to-transparent rounded-lg"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote
              className="text-4xl font-light text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              "Crear un mundo en el que la belleza sea una fuente de{" "}
              <span className="font-medium" style={{ color: "#d5b470" }}>
                autoestima
              </span>{" "}
              y no de ansiedad"
            </blockquote>
          </div>

          <div className="bg-gray-50 p-10 rounded-lg max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              La crema corporal nutritiva de Dove no es solo un producto de cuidado personal, es una{" "}
              <strong style={{ color: "#003e7e" }}>experiencia emocional</strong> que combina funcionalidad con
              bienestar emocional.
            </p>
          </div>

          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: "#d5b470" }}></div>
        </div>
      ),
    },

    // Slide 2: Producto
    {
      id: 2,
      title: "Producto: Nutrición que Trasciende la Piel",
      content: (
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#003e7e" }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-2xl font-medium"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Ingredientes Premium
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: "#d5b470" }}></div>
                  <span>
                    <strong>Suero restaurador de ceramida</strong> - Hidratación profunda
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: "#d5b470" }}></div>
                  <span>Fortalece la barrera natural de la piel</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: "#d5b470" }}></div>
                  <span>Mejora elasticidad y suavidad</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#d5b470" }}
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-2xl font-medium"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Variedad para Cada Piel
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Piel Seca", "Piel Sensible", "Go Fresh", "Aceite de Karité"].map((tipo) => (
                  <div
                    key={tipo}
                    className="bg-white px-4 py-3 rounded text-center text-sm font-medium text-gray-700 border border-gray-200"
                    style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    {tipo}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#003e7e" }}
                >
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-2xl font-medium"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Compromiso Sostenible
                </h3>
              </div>
              <p className="text-gray-700" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                Envases 100% reciclados desde 2019
              </p>
            </div>
          </div>

          <div className="text-center space-y-8">
            <img
              src="/placeholder.svg?height=450&width=320"
              alt="Crema corporal Dove con ingredientes naturales"
              className="mx-auto rounded-lg shadow-sm"
            />

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-medium text-gray-600" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                Etapa de <span style={{ color: "#003e7e" }}>madurez</span> en el ciclo de vida
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 3: Plaza
    {
      id: 3,
      title: "Plaza: Estrategia Multicanal Inteligente",
      content: (
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-light text-gray-800 mb-6" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              "Estar donde nuestras consumidoras nos necesitan"
            </h3>
            <div className="w-32 h-0.5 mx-auto" style={{ backgroundColor: "#d5b470" }}></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#003e7e" }}
                >
                  <span className="text-white text-2xl font-light">🏪</span>
                </div>
                <h4
                  className="text-xl font-medium"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Canales Físicos
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                <li>• Supermercados (Coto, Carrefour, Jumbo)</li>
                <li>• Farmacias (Farmacity)</li>
                <li>• Perfumerías especializadas</li>
              </ul>
              <div
                className="text-sm font-medium text-center p-3 rounded"
                style={{ color: "#003e7e", backgroundColor: "#f8f8f8" }}
              >
                Visibilidad + Asesoramiento
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#d5b470" }}
                >
                  <span className="text-white text-2xl font-light">💻</span>
                </div>
                <h4
                  className="text-xl font-medium"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Canales Digitales
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                <li>• Sitio web oficial (orientativo)</li>
                <li>• Mercado Libre</li>
                <li>• E-commerce de retailers</li>
              </ul>
              <div
                className="text-sm font-medium text-center p-3 rounded"
                style={{ color: "#d5b470", backgroundColor: "white" }}
              >
                Comodidad + Comparación
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#003e7e" }}
                >
                  <span className="text-white text-2xl font-light">🚚</span>
                </div>
                <h4
                  className="text-xl font-medium"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Logística Unilever
                </h4>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                <li>• Distribución centralizada</li>
                <li>• Envíos con Andreani</li>
                <li>• Seguimiento en tiempo real</li>
              </ul>
              <div
                className="text-sm font-medium text-center p-3 rounded"
                style={{ color: "#003e7e", backgroundColor: "#f8f8f8" }}
              >
                Eficiencia + Sostenibilidad
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-xl text-gray-700" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              <strong style={{ color: "#003e7e" }}>Distribución Intensiva:</strong> Máxima disponibilidad para un
              producto de consumo masivo
            </p>
          </div>
        </div>
      ),
    },

    // Slide 4: Precio
    {
      id: 4,
      title: "Precio: Equilibrio Perfecto entre Calidad y Accesibilidad",
      content: (
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-light text-gray-800 mb-4" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              Posicionamiento Medio-Alto en Consumo Masivo
            </h3>
            <p className="text-xl" style={{ color: "#d5b470", fontFamily: "Helvetica Neue, sans-serif" }}>
              "Calidad premium sin el precio premium"
            </p>
            <div className="w-32 h-0.5 mx-auto mt-6" style={{ backgroundColor: "#d5b470" }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h4
                  className="text-2xl font-medium mb-6"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Competencia Directa
                </h4>
                <div className="space-y-4">
                  {[
                    { marca: "Nivea", tipo: "Funcional", color: "#f8f8f8" },
                    { marca: "Dermaglós", tipo: "Técnico", color: "#f8f8f8" },
                    { marca: "Dove", tipo: "Emocional", color: "#003e7e", textColor: "white" },
                  ].map((item) => (
                    <div
                      key={item.marca}
                      className="flex justify-between items-center p-4 rounded"
                      style={{ backgroundColor: item.color }}
                    >
                      <span
                        className={`font-medium ${item.textColor === "white" ? "text-white" : "text-gray-800"}`}
                        style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                      >
                        {item.marca}
                      </span>
                      <span
                        className={`text-sm px-4 py-2 rounded-full ${item.textColor === "white" ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"}`}
                      >
                        {item.tipo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4
                  className="text-2xl font-medium mb-6"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Estrategia de Precios
                </h4>
                <ul className="space-y-4 text-gray-700" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                  {[
                    "Múltiples tamaños (200ml, 400ml)",
                    "Promociones frecuentes (5-33% desc.)",
                    "Combos y packs especiales",
                    "Precios diferenciados por canal",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: "#d5b470" }}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <img
                  src="/placeholder.svg?height=350&width=280"
                  alt="Comparativa de precios cremas corporales"
                  className="mx-auto rounded-lg shadow-sm"
                />
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4
                  className="text-2xl font-medium mb-4"
                  style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Valor Diferencial
                </h4>
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Ingredientes premium + Mensaje emocional + Accesibilidad económica
                </p>
                <div className="w-16 h-0.5 mx-auto mt-4" style={{ backgroundColor: "#d5b470" }}></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Promoción
    {
      id: 5,
      title: "Promoción: Storytelling que Transforma Vidas",
      content: (
        <div className="space-y-12">
          <div className="text-center">
            <h3
              className="text-4xl font-light mb-6"
              style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
            >
              "20 Años de Belleza Real"
            </h3>
            <p className="text-xl text-gray-600 italic" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              No vendemos productos, construimos movimientos sociales
            </p>
            <div className="w-32 h-0.5 mx-auto mt-6" style={{ backgroundColor: "#d5b470" }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "#d5b470" }}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4
                    className="text-2xl font-medium"
                    style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    Campañas Emblemáticas
                  </h4>
                </div>
                <ul className="space-y-4 text-gray-700" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                  {[
                    '"Belleza Real" - Mujeres auténticas',
                    '"Toda tu piel importa" (2025)',
                    "Proyecto para la Autoestima",
                    "Rechazo a estereotipos inalcanzables",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: "#d5b470" }}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "#003e7e" }}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4
                    className="text-2xl font-medium"
                    style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    Estrategia Multicanal
                  </h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["TV", "Instagram", "YouTube", "TikTok", "Vía Pública", "POP"].map((canal) => (
                    <div
                      key={canal}
                      className="bg-white px-3 py-2 rounded text-center text-sm font-medium text-gray-700 border border-gray-200"
                      style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                    >
                      {canal}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <img
                  src="/placeholder.svg?height=350&width=350"
                  alt="Campaña Dove mujeres reales diversas"
                  className="mx-auto rounded-lg shadow-sm"
                />
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <h4
                  className="text-2xl font-medium mb-4"
                  style={{ color: "#d5b470", fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Branding Emocional
                </h4>
                <blockquote
                  className="text-lg text-gray-700 italic leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  "El consumidor no solo elige un producto, sino la historia y los valores que lo acompañan"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 6: Integración del Marketing Mix
    {
      id: 6,
      title: "Integración: Las 4P Unidas por un Propósito",
      content: (
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-light text-gray-800 mb-4" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              Estrategia Unificada de Marketing Mix
            </h3>
            <p className="text-xl text-gray-600" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              Cada elemento potencia al otro en perfecta armonía
            </p>
            <div className="w-32 h-0.5 mx-auto mt-6" style={{ backgroundColor: "#d5b470" }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                letra: "P",
                titulo: "Producto",
                descripcion: "Calidad premium + experiencia emocional + sostenibilidad",
                bg: "white",
                color: "#003e7e",
              },
              {
                letra: "P",
                titulo: "Plaza",
                descripcion: "Distribución intensiva + omnicanalidad + logística eficiente",
                bg: "#f8f8f8",
                color: "#d5b470",
              },
              {
                letra: "P",
                titulo: "Precio",
                descripcion: "Equilibrio perfecto: accesibilidad + valor percibido + promociones",
                bg: "#f8f8f8",
                color: "#003e7e",
              },
              {
                letra: "P",
                titulo: "Promoción",
                descripcion: "Storytelling emocional + branding con propósito + multicanalidad",
                bg: "white",
                color: "#d5b470",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-lg shadow-sm border border-gray-100"
                style={{ backgroundColor: item.bg }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-light text-2xl mr-6"
                    style={{ backgroundColor: item.color, fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    {item.letra}
                  </div>
                  <h4
                    className="text-2xl font-medium"
                    style={{ color: item.color, fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    {item.titulo}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-10 rounded-lg text-center">
            <div className="flex items-center justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: "#003e7e" }}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4
                className="text-2xl font-medium"
                style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Resultado: Ventaja Competitiva Sostenible
              </h4>
            </div>
            <blockquote
              className="text-xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              "En el mundo de la paridad, la verdadera diferenciación está en cómo se integran todos los elementos del
              marketing mix para crear una experiencia única y memorable"
            </blockquote>
          </div>
        </div>
      ),
    },

    // Slide 7: Cierre
    {
      id: 7,
      title: "Dove: Más que una Marca, un Movimiento de Autoestima",
      content: (
        <div className="text-center space-y-12">
          <div className="relative">
            <img
              src="/placeholder.svg?height=320&width=550"
              alt="Mujeres diversas sonriendo con confianza"
              className="mx-auto rounded-lg shadow-sm"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote
              className="text-4xl font-light text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              "Dove no vende cremas, <br />
              <span className="font-medium" style={{ color: "#d5b470" }}>
                vende autoestima
              </span>
              "
            </blockquote>
          </div>

          <div className="bg-gray-50 p-10 rounded-lg max-w-5xl mx-auto">
            <h3
              className="text-3xl font-medium mb-6"
              style={{ color: "#003e7e", fontFamily: "Helvetica Neue, sans-serif" }}
            >
              El Poder del Vínculo Emocional
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              En un mercado saturado, Dove demostró que la verdadera diferenciación no está en el producto, sino en la{" "}
              <strong style={{ color: "#003e7e" }}>conexión emocional</strong> que genera con sus consumidoras. Cada
              compra es un acto de <strong style={{ color: "#d5b470" }}>identificación</strong> con valores de
              inclusión, autenticidad y amor propio.
            </p>
          </div>

          <div className="flex justify-center space-x-12">
            {[
              { icon: Heart, label: "Autoestima", color: "#003e7e" },
              { icon: Users, label: "Inclusión", color: "#d5b470" },
              { icon: Sparkles, label: "Belleza Real", color: "#003e7e" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gray-50">
                  <item.icon className="w-10 h-10" style={{ color: item.color }} />
                </div>
                <span
                  className="text-lg font-medium text-gray-600"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p
              className="text-2xl font-light text-gray-800 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              "Cuando una marca logra que sus consumidoras se vean reflejadas en sus valores, trasciende lo comercial
              para convertirse en parte de su identidad"
            </p>
          </div>

          <div className="w-32 h-0.5 mx-auto" style={{ backgroundColor: "#d5b470" }}></div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#003e7e" }}
            >
              <span className="text-white font-medium text-xl">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-medium text-gray-800">Marketing Mix - Dove</h1>
              <p className="text-gray-600">Crema Corporal Nutritiva</p>
            </div>
          </div>
          <div className="text-gray-600">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-lg min-h-[700px]">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">{slides[currentSlide].title}</h2>
            <div className="w-32 h-1 rounded-full" style={{ backgroundColor: "#003e7e" }}></div>
          </div>

          <div className="mb-12">{slides[currentSlide].content}</div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="flex items-center space-x-3 px-6 py-3 border-gray-200 hover:border-gray-300"
            disabled={currentSlide === 0}
            style={{ fontFamily: "Helvetica Neue, sans-serif" }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Anterior</span>
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentSlide ? "scale-125" : "hover:scale-110"
                }`}
                style={{
                  backgroundColor: index === currentSlide ? "#003e7e" : "#d1d5db",
                }}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="flex items-center space-x-3 px-6 py-3 border-gray-200 hover:border-gray-300"
            disabled={currentSlide === slides.length - 1}
            style={{ fontFamily: "Helvetica Neue, sans-serif" }}
          >
            <span>Siguiente</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-100 px-8 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
            Universidad del CEMA - Marketing Estratégico | Análisis Marketing Mix - Dove
          </p>
        </div>
      </div>
    </div>
  )
}
