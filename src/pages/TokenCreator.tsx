import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Coins, Upload, Zap, TrendingUp, DollarSign } from 'lucide-react';
import Layout from '@/components/Layout';

export default function TokenCreator() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="hero-gradient rounded-xl p-6 border border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Token Creator
              </h1>
              <p className="text-muted-foreground mt-2">
                Launch your own token on Pump.Fun v3.0
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="secondary">
                Launch Fee: 1 SOL
              </Badge>
              <Badge variant="outline">
                Instant Deploy
              </Badge>
            </div>
          </div>
        </div>

        {/* Token Creation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="trading-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coins className="h-5 w-5" />
                <span>Token Details</span>
              </CardTitle>
              <CardDescription>Configure your token parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Token Name</Label>
                <Input
                  placeholder="My Awesome Token"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
              </div>

              <div>
                <Label>Token Symbol</Label>
                <Input
                  placeholder="MAT"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                />
              </div>

              <div>
                <Label>Total Supply</Label>
                <Input
                  placeholder="1000000000"
                  value={totalSupply}
                  onChange={(e) => setTotalSupply(e.target.value)}
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  placeholder="Describe your token..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <Label>Token Image</Label>
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
              </div>

              <Button className="trading-button-primary w-full">
                <Zap className="mr-2 h-4 w-4" />
                Create Token
              </Button>
            </CardContent>
          </Card>

          <Card className="trading-card">
            <CardHeader>
              <CardTitle>Launch Preview</CardTitle>
              <CardDescription>How your token will appear</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <Coins className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">{tokenName || 'Token Name'}</h3>
                <p className="text-muted-foreground">{tokenSymbol || 'SYMBOL'}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Supply: {totalSupply || '0'} tokens
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Launches */}
        <Card className="trading-card">
          <CardHeader>
            <CardTitle>Recent Launches</CardTitle>
            <CardDescription>Latest tokens created on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No tokens launched yet</h3>
              <p className="text-muted-foreground">
                Be the first to launch a token on Pump.Fun v3.0
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}