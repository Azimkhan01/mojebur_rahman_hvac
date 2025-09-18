import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Snowflake, Wind, Thermometer, Settings, Wrench, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Chiller Systems",
      description:
        "Expert maintenance and troubleshooting of industrial chiller systems for optimal cooling performance.",
      features: ["Preventive Maintenance", "Emergency Repairs", "Performance Optimization"],
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Air Handling Units",
      description: "Complete AHU services including installation, maintenance, and efficiency improvements.",
      features: ["Filter Replacement", "Coil Cleaning", "Motor Maintenance"],
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Split & Window AC",
      description: "Professional installation and repair services for residential and commercial AC units.",
      features: ["Installation", "Gas Charging", "Electrical Repairs"],
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Fan Coil Units",
      description: "Specialized FCU maintenance and repair services for commercial HVAC systems.",
      features: ["Coil Replacement", "Fan Motor Service", "Control System Repair"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "System Installation",
      description: "Complete HVAC system installation services with proper sizing and configuration.",
      features: ["System Design", "Professional Installation", "Commissioning"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance programs to ensure optimal system performance and longevity.",
      features: ["Regular Inspections", "Performance Reports", "24/7 Support"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive HVAC solutions backed by decades of experience and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-accent text-accent-foreground border-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need HVAC Services?</h3>
              <p className="text-accent-foreground/90 mb-6 leading-relaxed">
                {"Get professional HVAC solutions tailored to your needs. Contact me for a consultation and quote."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition-colors"
                >
                  Get Quote
                </a>
                <a
                  href="tel:+966537207050"
                  className="inline-flex items-center justify-center px-6 py-3 border border-accent-foreground/20 text-accent-foreground rounded-md font-medium hover:bg-accent-foreground/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
