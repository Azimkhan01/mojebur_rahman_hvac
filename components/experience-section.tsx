import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "SABIC HQ Riyadh, KSA",
      position: "HVAC Technician",
      period: "Sep 2013 – Present",
      duration: "11+ years",
      contractor: "Sraco",
      current: true,
    },
    {
      company: "King Park University, KSA",
      position: "HVAC Technician",
      period: "Jun 2011 – Sep 2013",
      duration: "2 years",
      contractor: "Sraco",
      current: false,
    },
    {
      company: "Al-Khafji General Hospital, KSA",
      position: "HVAC Technician",
      period: "Jan 2008 – Jun 2012",
      duration: "4+ years",
      contractor: "Sraco",
      current: false,
    },
    {
      company: "Nazmi Trading Corporation",
      position: "AC Technician",
      period: "Jul 2003 – Jun 2007",
      duration: "4 years",
      contractor: "Direct",
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Over two decades of hands-on experience in HVAC systems across major institutions in Saudi Arabia
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent" />
                      {exp.company}
                    </CardTitle>
                    <p className="text-lg font-semibold text-accent">{exp.position}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    {exp.current && (
                      <Badge variant="default" className="bg-accent text-accent-foreground">
                        Current Position
                      </Badge>
                    )}
                    <Badge variant="outline" className="border-border">
                      {exp.contractor}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{exp.period}</span>
                  <span className="text-accent">({exp.duration})</span>
                </div>
              </CardContent>

              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 bottom-0 w-0.5 h-6 bg-border transform translate-y-full"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
