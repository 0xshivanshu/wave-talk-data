import { useEffect } from "react"; 
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Input is no longer needed since the iframe handles it
import { 
  MessageSquare,
  Sparkles,
  BarChart3,
  Download,
  RefreshCw,
  Waves
} from "lucide-react";

const Chat = () => {
  const exampleQueries = [
    "Show salinity near the equator",
    "What is the average salinity near the equator?", 
    "What is the deepest measurement by an ARGO float?",
    "Plot temperature change in the Pacific Ocean (50°N, 150°W)",
    "Summarize recent ARGO float deployments in the Indian Ocean",
    "Compare ocean currents in Atlantic and Pacific"
  ];

  useEffect(() => {
    const script = document.createElement('script');
    
    // All attributes from your <script> tag are set here
    script.defer = true;
    script.src = "https://app.relevanceai.com/embed/chat-bubble.js";
    script.dataset.relevanceaiShareId = "f1db6c/a1235268-604d-49b6-9d97-e8501768b7a2/90598398-1a6d-41ab-8986-6380e58c7a73";
    script.dataset.shareStyles = "hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false";

    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // The empty dependency array [] means this effect runs only once.

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8 h-[calc(100vh-8rem)]">
            
            {/* Sidebar (with previous scrolling fix) */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <Card className="flex-1 flex flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Quick Start
                  </CardTitle>
                  <CardDescription>
                    Try these example queries to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 overflow-y-auto"><div className="space-y-3 pr-4">
                  {exampleQueries.map((query, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start h-auto p-3 hover:bg-primary/5 hover:text-primary"
                      onClick={() => {/* Handle query selection */}}
                    >
                      <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{query}</span>
                    </Button>
                  ))}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pr-6">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Downloads
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Data Status
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3 flex flex-col">
              <Card className="flex-1 flex flex-col">
                <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Waves className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">FloatChat AI Assistant</CardTitle>
                        <CardDescription>
                          Ask questions about ocean data in natural language
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                      ● Online
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-0 overflow-hidden">
                  <iframe 
                    title="Relevance AI Chat" // It's good practice to add a title for accessibility
                    src="https://app.relevanceai.com/agents/f1db6c/a1235268-604d-49b6-9d97-e8501768b7a2/90598398-1a6d-41ab-8986-6380e58c7a73/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="microphone"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
