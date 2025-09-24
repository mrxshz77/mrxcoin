import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Note: In production, credentials would NEVER be hardcoded
// This is for demonstration purposes only
const DEMO_ADMIN_CREDENTIALS = {
  username: 'MrxShz7731',
  password: 'F@rdiny&&#!Maryam*@#!'
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Demo authentication logic
      if (isLogin) {
        if (credentials.username === DEMO_ADMIN_CREDENTIALS.username && 
            credentials.password === DEMO_ADMIN_CREDENTIALS.password) {
          toast({
            title: "Login Successful",
            description: "Welcome to Pump.Fun v3.0 Admin Panel",
          });
          // In a real app, this would set proper auth state and redirect
          window.location.href = '/admin';
        } else {
          toast({
            title: "Authentication Failed",
            description: "Invalid credentials. Access denied.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Registration Disabled",
          description: "Only admin can create new accounts.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Security Warning */}
        <Card className="mb-6 border-warning/30 bg-warning/5">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-warning">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Secure Access Required</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              This is a restricted system. Only authorized users may access.
            </p>
          </CardContent>
        </Card>

        {/* Main Auth Card */}
        <Card className="trading-card shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pump.Fun v3.0
            </CardTitle>
            <CardDescription>
              {isLogin ? 'Secure Admin Access' : 'Account Registration'}
            </CardDescription>
            <div className="flex justify-center space-x-2 mt-2">
              <Badge variant="secondary">
                <Lock className="h-3 w-3 mr-1" />
                Military Grade
              </Badge>
              <Badge variant="outline">
                Multi-Factor Auth
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({...prev, username: e.target.value}))}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({...prev, password: e.target.value}))}
                    required
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="trading-button-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>{isLogin ? 'Secure Login' : 'Create Account'}</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Security Features */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium mb-3">Security Features</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>256-bit Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>Biometric Auth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>Session Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>Threat Detection</span>
                </div>
              </div>
            </div>

            {/* Demo Note */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Demo System - Enhanced Security Active
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Admin-only account creation policy in effect
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            © 2024 Pump.Fun v3.0 - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}