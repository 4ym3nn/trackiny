import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aymen Dz",
    feedback:
      "I'm impressed with the features and user-friendly interface. It's become an essential tool for my daily tasks.",
    image: "/placeholder.svg",
  },
//   {
//     name: "Mohamed moh",
//     feedback: "The customer support is outstanding. They quickly resolved my issues and improved my experience.",
//     image: "/placeholder.svg",
//   },
//   {
//     name: "Mondher",
//     feedback: "This solution has transformed how our team collaborates. It's been a game-changer for our projects.",
//     image: "/placeholder.svg",
//   },
//   {
//     name: "Amine",
//     feedback: "I appreciate the regular updates and new features. The developers clearly listen to user feedback.",
//     image: "/placeholder.svg",
//   },
//   {
//     name: "Zakria",
//     feedback: "The app's performance is exceptional. It handles complex tasks with ease and speed.",
//     image: "/placeholder.svg",
//   },
]

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-[900px] mx-auto relative">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="bg-[#F5F9FF] border-none p-6 min-h-[334px]">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gray-400"  /><div className="mb-4">
  <Quote className="w-8 h-8 text-gray-400" />
</div>
                </div>

                <div className="flex flex-col h-full">
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-4">{testimonial.name}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{testimonial.feedback}</p>
                  </div>

                  {/* Profile Image */}
                  <div className="flex justify-end mt-4">
                    {/* <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} profile`}
                      className="w-16 h-16 rounded-full object-cover"
                    /> */}
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <CarouselPrevious className="h-12 w-12" />
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <CarouselNext className="h-12 w-12" />
        </div>
      </Carousel>
    </div>
  )
}

