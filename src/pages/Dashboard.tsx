import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Zap, 
  Bot, 
  Coins,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  DollarSign
} from 'lucide-react';
import Layout from '@/components/Layout';

// Mock data
const mockStats = {
  totalVolume: '$234.5M',
  activeTraders: '12.4K',
  aiProfits: '+156.7%',
  miningRewards: '892 MRX',
  portfolioValue: '$156,789',
  flashLoansVolume: '$2.1M'
};

const mockTokens = [
  { name: 'MemeRocket', symbol: 'MRX', price: '0.000156', change: 23.4, volume: '$1.2M' },
  { name: 'PumpCoin', symbol: 'PUMP', price: '0.007849', change: -5.2, volume: '$890K' },
  { name: 'DegenToken', symbol: 'DEGEN', price: '0.001234', change: 67.8, volume: '$2.3M' },
  { name: 'MoonShot', symbol: 'MOON', price: '0.000987', change: 12.1, volume: '$567K' },
];

const mockAIStrategies = [
  { name: 'Scalping Pro', status: 'Active', profit: '+$2,340', trades: 1234 },
  { name: 'DCA Master', status: 'Paused', profit: '+$890', trades: 456 },
  { name: 'Arbitrage Bot', status: 'Active', profit: '+$1,567', trades: 789 },
];

const mockMiners = [
  { name: 'GPU Rig #1', id: 'MGR001', hashrate: '245 MH/s', earnings: '23.4 MRX', status: 'Online' },
  { name: 'ASIC Miner Pro', id: 'AMP002', hashrate: '1.2 TH/s', earnings: '156.7 MRX', status: 'Online' },
  { name: 'Cloud Mining', id: 'CLM003', hashrate: '89 MH/s', earnings: '12.8 MRX', status: 'Offline' },
];

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mrxPrice, setMrxPrice] = useState(0.000156);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate price fluctuation
      setMrxPrice(prev => prev + (Math.random() - 0.5) * 0.000001);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="hero-gradient rounded-xl p-6 border border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome to Pump.Fun v3.0
              </h1>
              <p className="text-muted-foreground mt-2">
                The ultimate DeFi trading platform with AI-powered strategies
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="secondary" className="animate-pulse">
                MRX: ${mrxPrice.toFixed(6)}
              </Badge>
              <Badge variant="outline">
                {currentTime.toLocaleTimeString()}
              </Badge>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="trading-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalVolume}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="trading-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Traders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeTraders}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.3% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="trading-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Profits</CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.aiProfits}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +25.7% this week
              </p>
            </CardContent>
          </Card>

          <Card className="trading-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mining Rewards</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.miningRewards}</div>
              <p className="text-xs text-muted-foreground mt-1">
                24h mining yield
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="ai">AI Strategies</TabsTrigger>
            <TabsTrigger value="mining">Mining</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Market Overview */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Market Overview</span>
                  </CardTitle>
                  <CardDescription>Top performing tokens on Pump.Fun</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockTokens.map((token, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30">
                        <div>
                          <div className="font-medium">{token.name}</div>
                          <div className="text-sm text-muted-foreground">{token.symbol}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${token.price}</div>
                          <div className={`text-sm flex items-center ${token.change > 0 ? 'text-success' : 'text-destructive'}`}>
                            {token.change > 0 ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                            {token.change > 0 ? '+' : ''}{token.change}%
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {token.volume}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription>Fast access to platform features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="trading-button-primary h-20 flex flex-col">
                      <TrendingUp className="h-6 w-6 mb-2" />
                      <span>Start Trading</span>
                    </Button>
                    <Button className="trading-button-primary h-20 flex flex-col">
                      <Bot className="h-6 w-6 mb-2" />
                      <span>Launch AI Bot</span>
                    </Button>
                    <Button className="trading-button-primary h-20 flex flex-col">
                      <Zap className="h-6 w-6 mb-2" />
                      <span>Flash Loan</span>
                    </Button>
                    <Button className="trading-button-primary h-20 flex flex-col">
                      <Activity className="h-6 w-6 mb-2" />
                      <span>Start Mining</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Portfolio Summary */}
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Your trading and investment summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-3xl font-bold text-primary">${mockStats.portfolioValue}</div>
                    <div className="text-sm text-muted-foreground mt-1">Total Portfolio Value</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="text-3xl font-bold text-success">+23.4%</div>
                    <div className="text-sm text-muted-foreground mt-1">30-Day Return</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="text-3xl font-bold text-accent">89.2%</div>
                    <div className="text-sm text-muted-foreground mt-1">Win Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trading Tab */}
          <TabsContent value="trading" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>Recent Trades</CardTitle>
                  <CardDescription>Your latest trading activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                      <div>
                        <div className="font-medium text-success">BUY MRX</div>
                        <div className="text-sm text-muted-foreground">2 minutes ago</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">1,000,000 MRX</div>
                        <div className="text-sm text-muted-foreground">$156.78</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <div>
                        <div className="font-medium text-destructive">SELL PUMP</div>
                        <div className="text-sm text-muted-foreground">15 minutes ago</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">50,000 PUMP</div>
                        <div className="text-sm text-muted-foreground">$394.50</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="trading-card">
                <CardHeader>
                  <CardTitle>Flash Loans Active</CardTitle>
                  <CardDescription>Current flash loan positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        Total Borrowed
                      </div>
                      <div className="text-xl font-semibold">{mockStats.flashLoansVolume}</div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      3 active loans • 0.1% fee • Auto-repay enabled
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Strategies Tab */}
          <TabsContent value="ai" className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>AI Trading Strategies</CardTitle>
                <CardDescription>Automated trading bots and their performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAIStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30">
                      <div className="flex items-center space-x-3">
                        <Bot className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-medium">{strategy.name}</div>
                          <div className="text-sm text-muted-foreground">{strategy.trades} trades executed</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={strategy.status === 'Active' ? 'default' : 'secondary'}>
                          {strategy.status}
                        </Badge>
                        <div className="text-sm font-medium mt-1 text-success">
                          {strategy.profit}
                          <span className="text-muted-foreground ml-1">24h P&L</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mining Tab */}
          <TabsContent value="mining" className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Mining Operations</CardTitle>
                <CardDescription>Your simulated and real mining hardware</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMiners.map((miner) => (
                    <div key={miner.id} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30">
                      <div className="flex items-center space-x-3">
                        <Activity className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-medium">{miner.name}</div>
                          <div className="text-sm text-muted-foreground">ID: {miner.id}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="font-medium">{miner.hashrate}</div>
                          <div className="text-xs text-muted-foreground">Hashrate</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-success">{miner.earnings}</div>
                          <div className="text-xs text-muted-foreground">24h Earnings</div>
                        </div>
                        <Badge variant={miner.status === 'Online' ? 'default' : 'secondary'}>
                          {miner.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}