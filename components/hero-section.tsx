import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                MUJEBUR RAHMAN KHAN
              </h1>
              <p className="text-xl lg:text-2xl text-accent font-semibold">Professional HVAC Technician</p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {
                  "Seeking a position within a company where I can offer my diverse skills and have the opportunity to grow and excel as a successful HVAC technician."
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#experience">View Experience</a>
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+966 53 720 7050</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>azim60954@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-card border-border shadow-lg max-w-md w-full">
              <div className="text-center space-y-6">
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <img
                    src="/r.png"
                    alt="Mujebur Rahman Khan"
                    className="w-28 h-28 rounded-full object-cover border-4 border-background"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">20+ Years Experience</h3>
                  <p className="text-muted-foreground">Specialized in HVAC Systems</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">4</div>
                    <div className="text-sm text-muted-foreground">Languages</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
