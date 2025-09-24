import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Settings, 
  Users, 
  BarChart3, 
  Shield, 
  Wallet, 
  Bot, 
  Database,
  Monitor,
  Coins,
  TrendingUp,
  Zap,
  Crown,
  Eye,
  DollarSign
} from 'lucide-react';
import Layout from '@/components/Layout';

// Mock data for admin dashboard
const platformStats = {
  totalUsers: 15847,
  activeTraders: 3421,
  totalVolume: '$127.8M',
  mrxPrice: 0.000156,
  totalMRXSupply: '1B',
  circulatingSupply: '234.7M',
  liquidityPool: '$2.3M',
  flashLoansActive: 67,
  aiModelsDeployed: 23,
  miningPower: '847 TH/s'
};

const mockUsers = [
  { id: 1, username: 'Trader001', balance: 15750.50, role: 'user', status: 'active', profits: 2347.80 },
  { id: 2, username: 'AIBot_Pro', balance: 98234.00, role: 'bot', status: 'active', profits: 15678.90 },
  { id: 3, username: 'FlashLord', balance: 45600.75, role: 'trader', status: 'active', profits: 8945.23 },
  { id: 4, username: 'MegaMiner', balance: 23890.25, role: 'user', status: 'mining', profits: 3456.78 },
];

const mockWallets = [
  { 
    address: '0x959534Cf205a45bcC46a88cdb110c1E8C5E9C0AF', 
    type: 'ETH Main', 
    balance: '45.67 ETH',
    seed: 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
    transactions: 1234
  },
  { 
    address: 'D95G9tEqifeq3kB7itruyh9kNDVAtD7zU3SrA6iKeGz8', 
    type: 'SOL Main', 
    balance: '892.34 SOL',
    seed: 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
    transactions: 5678
  },
];

export default function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [mrxPrice, setMrxPrice] = useState(platformStats.mrxPrice);
  const [autoTradingEnabled, setAutoTradingEnabled] = useState(true);
  
  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setMrxPrice(prev => prev + (Math.random() - 0.5) * 0.000001);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="hero-gradient rounded-xl p-6 border border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <Crown className="inline h-8 w-8 mr-2" />
                Supreme Admin Panel
              </h1>
              <p className="text-muted-foreground mt-2">
                Complete platform control and MRX token management
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="secondary">
                <Shield className="h-3 w-3 mr-1" />
                Ultra Secure
              </Badge>
              <Badge variant="default">
                <Zap className="h-3 w-3 mr-1" />
                Live Control
              </Badge>
              <Badge variant="outline">
                MRX v3.0.1
              </Badge>
            </div>
          </div>
        </div>

        {/* Main Admin Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="wallets">Wallets</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="mining">Mining</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Platform Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="trading-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    Total Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{platformStats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-success">+12.3% from last month</p>
                </CardContent>
              </Card>

              <Card className="trading-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trading Volume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">{platformStats.totalVolume}</div>
                  <p className="text-xs text-success">+45.7% this week</p>
                </CardContent>
              </Card>

              <Card className="trading-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm">
                    <Coins className="h-4 w-4 mr-2" />
                    MRX Price
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">${mrxPrice.toFixed(6)}</div>
                  <p className="text-xs text-success">Target: $1.00</p>
                </CardContent>
              </Card>

              <Card className="trading-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm">
                    <Zap className="h-4 w-4 mr-2" />
                    Mining Power
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-warning">{platformStats.miningPower}</div>
                  <p className="text-xs text-success">+23.4% efficiency</p>
                </CardContent>
              </Card>
            </div>

            {/* Real-time Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>MRX Token Control</CardTitle>
                  <CardDescription>Real-time token management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Total Supply</Label>
                      <div className="text-lg font-bold">{platformStats.totalMRXSupply}</div>
                    </div>
                    <div>
                      <Label className="text-xs">Circulating</Label>
                      <div className="text-lg font-bold">{platformStats.circulatingSupply}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label className="text-xs">Liquidity Pool</Label>
                      <span className="text-xs font-medium">{platformStats.liquidityPool}</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="trading-button-primary flex-1">
                      <DollarSign className="mr-2 h-3 w-3" />
                      Price Boost
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Coins className="mr-2 h-3 w-3" />
                      Mint Tokens
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Platform health monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">AI Trading Bots</span>
                      <Badge variant="default">{platformStats.aiModelsDeployed} Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Flash Loans</span>
                      <Badge variant="secondary">{platformStats.flashLoansActive} Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Traders</span>
                      <Badge variant="outline">{platformStats.activeTraders.toLocaleString()}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Auto Trading</span>
                      <Switch 
                        checked={autoTradingEnabled}
                        onCheckedChange={setAutoTradingEnabled}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Monitor and manage all platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          {user.role === 'bot' ? <Bot className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                        </div>
                        <div>
                          <div className="font-medium">{user.username}</div>
                          <div className="text-sm text-muted-foreground">
                            Balance: ${user.balance.toLocaleString()} • Profits: ${user.profits.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={user.role === 'bot' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                        <Badge variant={user.status === 'active' ? 'default' : 'outline'}>
                          {user.status}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wallets Tab */}
          <TabsContent value="wallets" className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Wallet Management</CardTitle>
                <CardDescription>Control main wallets and seed phrases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockWallets.map((wallet, index) => (
                    <div key={index} className="p-4 rounded-lg bg-background/50 border border-border/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Wallet className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">{wallet.type}</div>
                            <div className="text-sm text-muted-foreground">{wallet.balance}</div>
                          </div>
                        </div>
                        <Badge variant="default">{wallet.transactions} TXs</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <Label className="text-xs">Wallet Address</Label>
                          <Input value={wallet.address} readOnly className="text-xs font-mono" />
                        </div>
                        <div>
                          <Label className="text-xs">Seed Phrase (12 Words)</Label>
                          <Input value={wallet.seed} readOnly className="text-xs" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trading Tab */}
          <TabsContent value="trading" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>Auto Trading Control</CardTitle>
                  <CardDescription>Manage automated trading systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Flash Loan Trading</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Arbitrage Detection</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>AI Model Trading</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Price Manipulation Protection</Label>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>Revenue Settings</CardTitle>
                  <CardDescription>Configure profit distribution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Target Daily Revenue</Label>
                    <Input type="number" placeholder="1000000" />
                    <p className="text-xs text-muted-foreground mt-1">USD per day</p>
                  </div>
                  
                  <div>
                    <Label>Auto Profit Transfer</Label>
                    <Select defaultValue="enabled">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enabled">Enabled (&gt;$100)</SelectItem>
                        <SelectItem value="disabled">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Mining Tab */}
          <TabsContent value="mining" className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Mining Operations</CardTitle>
                <CardDescription>MRX token mining control panel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Coins className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Mining Control Active</h3>
                  <p className="text-muted-foreground mb-6">
                    Real MRX token mining with AI-powered efficiency
                  </p>
                  <Button className="trading-button-primary">
                    <Zap className="mr-2 h-4 w-4" />
                    Optimize Mining Power
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Advanced platform settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Settings className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Configuration Panel</h3>
                  <p className="text-muted-foreground mb-6">
                    Ultra-secure system configuration and monitoring
                  </p>
                  <Button className="trading-button-primary">
                    <Shield className="mr-2 h-4 w-4" />
                    Access Security Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}