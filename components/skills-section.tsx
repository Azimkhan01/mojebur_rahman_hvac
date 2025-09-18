import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wrench, Monitor, Globe } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Chillers", level: 95 },
    { name: "AHU (Air Handling Units)", level: 90 },
    { name: "FCU (Fan Coil Units)", level: 90 },
    { name: "Split Units", level: 95 },
    { name: "Window AC", level: 90 },
    { name: "Refrigeration Systems", level: 85 },
    { name: "HVAC Installation", level: 88 },
    { name: "System Troubleshooting", level: 92 },
  ]

  const softwareSkills = [
    { name: "MS Word", level: 75 },
    { name: "MS Excel", level: 70 },
  ]

  const languages = [
    { name: "English", level: 80, stars: 4 },
    { name: "Hindi", level: 80, stars: 4 },
    { name: "Urdu", level: 80, stars: 4 },
    { name: "Arabic", level: 60, stars: 3 },
  ]

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive technical skills developed through years of hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="lg:col-span-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Wrench className="h-5 w-5 text-accent" />
                Technical Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Software Skills */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Monitor className="h-5 w-5 text-accent" />
                  Software Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {softwareSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Globe className="h-5 w-5 text-accent" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground">{lang.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < lang.stars ? "text-accent" : "text-muted-foreground"}`}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
